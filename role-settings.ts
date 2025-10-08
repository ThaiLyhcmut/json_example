module.exports = function () {
  return {
    _id: "672ca01a1bc536db581732c5",
    title: "Role Settings",
    mongodb_collection_name: "role-settings",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập title",
          filter: true,
          dependencies: {}
        },
        endpoint: {
          widget: "UriKeyGen",
          title: "Endpoint",
          type: "string",
          depend_field: "root_title",
          dependencies: {}
        },
        long_description: {
          title: "Long Description",
          type: "string",
          widget: "longAnswer",
          customRole: "textarea",
          dependencies: {}
        },
        role: {
          type: "string",
          widget: "shortAnswer",
          title: "Role",
          description: "Chọn role",
          dependencies: {}
        },
        method: {
          items: {
            type: "object",
            dependencies: {}
          },
          title: "Method",
          type: "array",
          dependencies: {}
        },
        settings: {
          title: "Settings",
          type: "object",
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    languages: [],
    is_active: true,
    use_locale: false,
    use_parent: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2024-11-07T11:10:18.596Z"),
    updated_at: new Date("2025-01-14T06:15:14.217Z"),
    entity_group: null,
    use_parent_delete_childs: false,
    use_seo_path: false,
    public_entity: false,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}