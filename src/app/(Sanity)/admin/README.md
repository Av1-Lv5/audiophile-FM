# About this folder

This `src/app/(Sanity)/admin` folder handles the Sanity integration, embedding the Studio at the route `/admin`.

Sanity Studio is a React application that serves as a visual editor to create, delete, and update your data in the Content Lake.

## Schema Files

The content structure is defined by schema files located in `src/sanity/schemas`. The Studio relies on these schemas to correctly display and validate your data.

## What if schema files are lost or corrupted?

If the local schema files are lost or corrupted, the **data itself remains safe** in the Sanity Content Lake. However, the Studio UI will likely fail to load or display fields correctly because it doesn't know how to interpret the raw data.

**How to recover the structure:**
You can "reverse-engineer" your content structure by querying the raw JSON data directly.

1.  **Use the HTTP API, CLI or Vision Tool**: You can fetch your documents using GROQ queries even without the schema definitions.
2.  **Inspect the Data**: A query like `*[_type == "product"][0]` will return a JSON object showing exactly what fields (keys) exist in your database.
    ```json
    {
    	"_type": "product",
    	"title": "XX99 Mark II Headphones",
    	"price": 2999
    }
    ```
3.  **Rebuild Schemas**: Use these JSON keys (e.g., `title`, `price`) to recreate your schema definitions.
