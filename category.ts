module.exports = function () {
  return {
    _id: "681c3bbd0800af97de9421a9",
    is_active: 1,
    meta_data: {},
    title: "Category",
    mongodb_collection_name: "category",
    entity_group: [],
    unique_keys: "",
    use_parent: true,
    use_parent_delete_childs: false,
    use_locale: true,
    use_block: false,
    use_seo_path: true,
    use_pinned: false,
    json_schema: {
      type: "object",
      properties: {
        is_root: {
          title: "Is Root",
          type: "boolean",
          widget: "boolean",
          expanded: true,
          require: false,
          default: "true",
          hidden: true,
          dependencies: {}
        },
        title: {
          title: "Title",
          type: "string",
          description: "Nhập thông tin tiêu đề",
          widget: "shortAnswer",
          expanded: true,
          require: true,
          filter: true,
          dependencies: {}
        },
        slug: {
          title: "Slug",
          type: "string",
          widget: "UriKeyGen",
          expanded: true,
          require: true,
          depend_field: "root_title",
          filter: true,
          description: "Nhập thông tin slug",
          dependencies: {}
        },
        parent_id: {
          title: "Parent",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          expanded: true,
          require: false,
          typeRelation: {
            title: "category",
            id: "category",
            filter: {
              combinator: "and",
              rules: [],
              id: "159418f2-c9a3-4956-92b4-158f57e21a02"
            }
          },
          hidden: false,
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        post_type: {
          title: "Post Type",
          type: [
            "array",
            "null",
            "string"
          ],
          description: "Chọn posttype",
          widget: "relation",
          expanded: true,
          require: true,
          typeRelation: {
            _id: "mongodb_collection_name",
            title: "entity",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [
                {
                  id: "aa3aaed6-5f7c-44ac-ab00-5cd48aec1970",
                  field: "use_posttype",
                  operator: "eq",
                  valueSource: "value",
                  value: true
                }
              ],
              id: "fafa4a67-c57c-4a72-9c69-16aae6ce3af9"
            }
          },
          typeSelect: "once",
          filter: true,
          hidden: false,
          refValue: "mongodb_collection_name",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        featured_image: {
          title: "Featured Image",
          type: [
            "array",
            "null",
            "string"
          ],
          description: "Hình ảnh đại diện",
          widget: "file",
          expanded: true,
          require: false,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        short_description: {
          widget: "longAnswer",
          customRole: "textarea",
          title: "Short Description",
          type: "string",
          description: "Nhập mô tả",
          dependencies: {}
        },
        long_description: {
          widget: "longAnswer",
          customRole: "texteditor",
          title: "Long Description",
          type: "string",
          description: "Nhập nội dung",
          dependencies: {}
        },
        session_seo: {
          title: "Session SEO",
          type: "object",
          description: "Nhập thông tin thẻ SEO",
          expanded: true,
          properties: {
            title: {
              title: "Meta Title",
              type: "string",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              description: "Nhập thông tin meta title",
              dependencies: {}
            },
            short_description: {
              title: "Meta Description",
              type: "string",
              description: "Chọn nội dung cho thẻ meta",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            }
          },
          dependencies: {},
          required: [],
          additionalProperties: false
        },
        file: {
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "file",
          title: "File",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        locale_id: {
          title: "Locale ID",
          type: "string",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          filter: true,
          hidden: true,
          dependencies: {}
        }
      },
      required: [
        "title",
        "slug",
        "post_type"
      ],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [
      {
        locale: "vi",
        slug: "category"
      },
      {
        locale: "en",
        slug: "category"
      }
    ],
    entity_setting: {
      fe_list: "is_root,\ntitle,\nslug,\npost_type(),\npost_type.title,\npost_type.mongodb_collection_name,\nlocale_id,\nlocale,\nparent_id,\nlanguages,\nmeta_data.slug,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    },
    tenant_id: null,
    updated_at: new Date("2025-10-08T10:40:12.000Z"),
    created_at: "8/26/2025, 5:48:50 PM",
    use_approval_process: false,
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    status: "1",
    use_slug: false,
    comment_mode: false
  };
}