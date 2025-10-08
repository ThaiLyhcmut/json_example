module.exports = function () {
  return {
    _id: "67a9ae4bb6350baa12246daf",
    is_active: true,
    meta_data: {},
    title: "Categories Block Image",
    mongodb_collection_name: "categories-block-image",
    entity_group: null,
    unique_keys: "",
    use_parent: false,
    use_parent_delete_childs: false,
    use_locale: false,
    use_block: false,
    use_seo_path: false,
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        slug: {
          widget: "UriKeyGen",
          title: "Slug",
          type: "string",
          depend_field: "root_title",
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [
      {
        locale: "vi",
        slug: "categories-block-image"
      },
      {
        locale: "en",
        slug: "categories-block-image"
      }
    ],
    entity_setting: {},
    tenant_id: null,
    updated_at: "8/26/2025, 3:05:10 PM",
    created_at: "8/26/2025, 3:05:10 PM",
    use_approval_process: false,
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae"
  };
}