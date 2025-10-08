module.exports = function () {
  return {
    _id: "6740251baefaffc3e4662e6b",
    title: "Tenant",
    mongodb_collection_name: "tenant",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          description: "Nhập title cho tenant",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        is_active: {
          title: "Is Active",
          type: "boolean",
          description: "Có build tenant hay không",
          widget: "boolean",
          expanded: true,
          require: false,
          appearance: "switch",
          dependencies: {}
        },
        mge_setting: {
          title: "mge_setting",
          type: "object",
          expanded: true,
          properties: {
            is_root: {
              title: "is_root",
              type: "boolean",
              widget: "boolean",
              expanded: true,
              require: false,
              appearance: "switch",
              dependencies: {}
            },
            code: {
              title: "code",
              type: "string",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            color: {
              type: [
                "array",
                "null",
                "string"
              ],
              widget: "file",
              title: "color",
              dependencies: {},
              items: {
                type: "string"
              }
            },
            configs: {
              title: "configs",
              type: "string",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            logo: {
              type: [
                "array",
                "null",
                "string"
              ],
              widget: "file",
              title: "logo",
              dependencies: {},
              items: {
                type: "string"
              }
            },
            domains: {
              title: "domains",
              type: "string",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            setting_permissions: {
              title: "Setting Permissions",
              type: "object",
              expanded: true,
              required: [
                "setting_group_create"
              ],
              properties: {
                setting_group_create: {
                  title: "Setting Group Create",
                  type: [
                    "array",
                    "null",
                    "string"
                  ],
                  widget: "relation",
                  expanded: true,
                  require: true,
                  typeRelation: {
                    title: "user-tenant-level",
                    _id: "user-tenant-level",
                    type: "1-n",
                    filter: {
                      combinator: "and",
                      rules: [],
                      id: "f8f3f58d-dd24-4afb-9dd7-178cd2344e87"
                    }
                  },
                  typeSelect: "multiple",
                  dependencies: {},
                  items: {
                    type: "string"
                  }
                }
              },
              dependencies: {},
              additionalProperties: false
            },
            logo2: {
              title: "logo2",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            }
          },
          required: [],
          dependencies: {},
          additionalProperties: false
        },
        settings: {
          title: "Settings",
          type: "object",
          description: "Nhập các thông tin thêm",
          expanded: true,
          properties: {
            description: {
              title: "Description",
              type: "string",
              description: "Nhập mô tả cho tenant",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            layout: {
              title: "Layout",
              type: "string",
              description: "Chọn layout hiển thị",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            logo: {
              title: "Logo",
              type: [
                "array",
                "null",
                "string"
              ],
              description: "Chọn logo hiển thị",
              widget: "file",
              expanded: true,
              require: false,
              dependencies: {},
              items: {
                type: "string"
              }
            },
            img_og: {
              title: "Image OG",
              type: [
                "array",
                "null",
                "string"
              ],
              description: "Chọn hình hiển thị cho og",
              widget: "file",
              expanded: true,
              require: false,
              dependencies: {},
              items: {
                type: "string"
              }
            },
            img_notfound: {
              title: "Image Notfound",
              type: [
                "array",
                "null",
                "string"
              ],
              description: "Chọn hình hiển thị khi bị lỗi",
              widget: "file",
              expanded: true,
              require: false,
              dependencies: {},
              items: {
                type: "string"
              }
            },
            env: {
              title: "env",
              type: "string",
              widget: "function",
              dependencies: {}
            },
            entities: {
              title: "entities",
              type: [
                "array",
                "null",
                "string"
              ],
              widget: "relation",
              typeRelation: {
                title: "entity",
                entity: "entity",
                type: "1-n",
                filter: {
                  combinator: "and",
                  rules: [],
                  id: "103bd709-cd45-45c1-97ba-5de8f7013299"
                }
              },
              dependencies: {},
              items: {
                type: "string"
              }
            }
          },
          required: [],
          dependencies: {},
          additionalProperties: false
        },
        type: {
          title: "type",
          type: "string",
          widget: "select",
          choices: [
            {
              key: "public",
              value: "public"
            },
            {
              key: "private",
              value: "private"
            }
          ],
          default: "public",
          filter: true,
          dependencies: {},
          enum: [
            "public",
            "private"
          ]
        },
        course_setting: {
          title: "course_setting",
          type: "object",
          properties: {
            create_course: {
              title: "create_course",
              type: [
                "array",
                "null",
                "string"
              ],
              widget: "relation",
              typeRelation: {
                title: "user-tenant-level",
                _id: "user-tenant-level",
                type: "n-1"
              },
              dependencies: {},
              items: {
                type: "string"
              }
            },
            create_question: {
              title: "create_question",
              type: [
                "array",
                "null",
                "string"
              ],
              widget: "relation",
              typeRelation: {
                title: "user-tenant-level",
                _id: "user-tenant-level",
                type: "n-1",
                filter: {
                  combinator: "and",
                  rules: [],
                  id: "d9eef44f-9e02-4723-ab74-d3ab08d66c20"
                }
              },
              description: "(vì question là được sử dụng global nên phải setting ở tenant)",
              dependencies: {},
              items: {
                type: "string"
              }
            }
          },
          required: [
            "create_course",
            "create_question"
          ],
          dependencies: {},
          additionalProperties: false
        },
        sidebar: {
          title: "Sidebar",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          dependencies: {}
        }
      },
      required: [
        "type"
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
    created_at: new Date("2024-11-22T06:30:51.177Z"),
    updated_at: new Date("2025-05-16T04:43:38.780Z"),
    entity_group: null,
    use_parent_delete_childs: false,
    use_seo_path: false,
    entity_setting: {},
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}