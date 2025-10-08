module.exports = function () {
  return {
    _id: "674ff812cb2517013d3a690c",
    title: "Response",
    mongodb_collection_name: "response",
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
        outputEntity: {
          title: "Output Entity",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "entity",
            entity: "entity",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "d70aded2-586a-4362-8210-7e1a46ae4c5c"
            }
          },
          description: "Chọn entity",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        queryAdvance: {
          title: "Query Advance",
          type: "string",
          widget: "function",
          description: "Nhập query",
          dependencies: {}
        },
        params: {
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          title: "Params",
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
        note: {
          title: "Note",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        method: {
          widget: "select",
          returnValue: 2,
          choices: [
            {
              key: "GET LIST",
              value: "get-list"
            },
            {
              key: "GET DETAIL",
              value: "get-detail"
            },
            {
              key: "POST",
              value: "post"
            },
            {
              key: "PUT",
              value: "put"
            },
            {
              key: "PATCH",
              value: "patch"
            },
            {
              key: "DELETE",
              value: "delete"
            }
          ],
          default: "",
          allowNull: false,
          isMultiple: false,
          title: "Method",
          type: "string",
          filter: true,
          dependencies: {},
          enum: [
            "get-list",
            "get-detail",
            "post",
            "put",
            "patch",
            "delete"
          ]
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
            title: "entity",
            entity: "entity",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "560dc173-c6c2-44a9-a636-0f3c07e7f1f2"
            }
          },
          dependencies: {},
          items: {
            type: "string"
          }
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
          description: "Chọn categories cho response",
          dependencies: {},
          items: {
            type: "string"
          }
        }
      },
      required: [
        "title",
        "outputEntity"
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
    entity_group: null,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2024-12-04T06:34:58.328Z"),
    updated_at: new Date("2025-01-09T06:18:33.448Z"),
    use_seo_path: false,
    use_parent_delete_childs: false,
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}