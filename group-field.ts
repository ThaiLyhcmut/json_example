module.exports = function () {
  return {
    _id: "67ab1ad32754c1bdc0414a0c",
    is_active: 1,
    meta_data: {},
    title: "Group Field",
    mongodb_collection_name: "group-field",
    entity_group: [],
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
          filter: true,
          dependencies: {}
        },
        featured_image: {
          title: "Featured Image",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "file",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        folder: {
          title: "Folder",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "categories-block-image",
            _id: "categories-block-image",
            type: "n-1"
          },
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        tag: {
          title: "Tag",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "tags-group-field",
            _id: "tags-group-field",
            type: "n-1"
          },
          dependencies: {},
          items: {
            type: "string"
          }
        },
        sourceJSX: {
          type: "string",
          widget: "function",
          title: "Source JSX",
          dependencies: {}
        },
        isGenerated: {
          title: "Is Generated",
          type: "boolean",
          default: "false",
          widget: "boolean",
          dependencies: {}
        },
        isActive: {
          title: "Is Active",
          type: "boolean",
          default: "false",
          widget: "boolean",
          dependencies: {}
        },
        defaultData: {
          widget: "longAnswer",
          customRole: "textarea",
          title: "Default Data",
          type: "string",
          dependencies: {}
        },
        json_schema: {
          widget: "href",
          typeUrl: "url",
          title: "json_schema",
          type: "object",
          dependencies: {}
        },
        ui_schema: {
          widget: "href",
          typeUrl: "url",
          title: "ui_schema",
          type: "object",
          dependencies: {}
        }
      },
      required: [
        "title",
        "slug"
      ],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [],
    entity_setting: {},
    tenant_id: null,
    public_entity: true,
    use_timestamp: true,
    use_approval_process: false,
    use_posttype: false,
    created_at: new Date("2025-08-26T03:51:31.056Z"),
    updated_at: new Date("2025-10-07T09:06:02.000Z"),
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    comment_mode: false,
    status: "1",
    use_slug: false
  };
}