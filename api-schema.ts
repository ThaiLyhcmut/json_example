module.exports = function () {
  return {
    _id: "6808d00817c9cce3de7b37af",
    title: "API Schema",
    mongodb_collection_name: "api-schema",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập thông tin title",
          filter: true,
          dependencies: {}
        },
        api: {
          title: "API",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "role-settings",
            _id: "role-settings",
            type: "n-1"
          },
          description: "Chọn api",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        filter: {
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          title: "Filter",
          dependencies: {}
        },
        form: {
          title: "Form",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          dependencies: {}
        },
        required: {
          title: "Required",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          description: "Required",
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
    use_parent_delete_childs: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    use_seo_path: false,
    entity_group: null,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2025-04-23T11:33:28.559Z"),
    updated_at: new Date("2025-04-25T08:43:03.758Z"),
    entity_setting: {},
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}