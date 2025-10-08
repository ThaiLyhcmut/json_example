module.exports = function () {
  return {
    _id: "6729dfa71f95e711035156a3",
    title: "Validate",
    mongodb_collection_name: "validate",
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
        logged: {
          title: "Logged",
          type: "boolean",
          widget: "boolean",
          filter: true,
          description: "Kiểm tra đã login chưa?",
          dependencies: {}
        },
        note: {
          type: "string",
          widget: "shortAnswer",
          title: "Note",
          description: "Thêm thông tin ghi chú",
          dependencies: {}
        },
        entity: {
          title: "Entity",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "entity",
            _id: "entity",
            filter: [],
            type: "1-n"
          },
          description: "Chọn entity",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        data: {
          title: "Data",
          type: "object",
          widget: "condition",
          description: "Config data validate",
          fieldRelation: "entity",
          typeUI: "validate",
          dependencies: {}
        },
        advance: {
          title: "Advance",
          type: "string",
          widget: "function",
          dependencies: {}
        },
        required: {
          title: "Required",
          type: "array",
          items: {
            type: "string",
            dependencies: {}
          },
          description: "Field require",
          filter: true,
          hidden: true,
          widget: "array",
          dependencies: {}
        },
        queryMongodb: {
          title: "Query Mongodb",
          type: "string",
          widget: "function",
          description: "Format query",
          hidden: true,
          dependencies: {}
        },
        pre: {
          title: "Pre",
          type: "object",
          widget: "condition",
          dependencies: {}
        },
        params: {
          title: "Params",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          hidden: true,
          dependencies: {}
        },
        headers: {
          title: "Headers",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          hidden: true,
          dependencies: {}
        },
        body: {
          title: "Body",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          hidden: true,
          dependencies: {}
        },
        documents: {
          title: "Documents",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "documents",
            _id: "documents",
            type: "n-1"
          },
          dependencies: {},
          items: {
            type: "string"
          }
        },
        error_code: {
          title: "Error Code",
          type: "string",
          widget: "shortAnswer",
          hidden: true,
          dependencies: {}
        },
        categories: {
          title: "Categories",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "categories-api",
            _id: "categories-api",
            type: "n-1"
          },
          description: "Chọn categories cho validate",
          dependencies: {},
          items: {
            type: "string"
          }
        }
      },
      required: [
        "title"
      ],
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
    created_at: new Date("2024-11-05T09:04:39.059Z"),
    updated_at: new Date("2025-01-09T06:19:24.245Z"),
    entity_group: null,
    use_parent_delete_childs: false,
    use_seo_path: false,
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}