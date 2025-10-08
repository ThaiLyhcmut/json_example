module.exports = function () {
  return {
    _id: "677cce5b676bc057e16690ed",
    title: "media",
    mongodb_collection_name: "media",
    languages: [],
    is_active: true,
    use_locale: false,
    use_parent: false,
    use_parent_delete_childs: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    use_seo_path: false,
    entity_group: [],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-01-07T06:48:59.784Z"),
    updated_at: new Date("2025-10-01T13:50:13.000Z"),
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    json_schema: {
      type: "object",
      properties: {
        title: {
          type: "string",
          widget: "shortAnswer",
          title: "Title",
          dependencies: {}
        },
        path: {
          title: "Path",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    status: "1",
    unique_keys: "",
    use_slug: false
  };
}