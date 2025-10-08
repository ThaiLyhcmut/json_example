module.exports = function () {
  return {
    _id: "682ff7bbfd3da7249b8a915d",
    is_active: true,
    meta_data: {},
    title: "Layout",
    mongodb_collection_name: "layout",
    entity_group: [],
    unique_keys: "",
    use_parent: false,
    use_parent_delete_childs: false,
    use_locale: true,
    use_block: true,
    use_seo_path: false,
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          description: "Nhập thông tin title",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        slug: {
          title: "Slug",
          type: "string",
          widget: "UriKeyGen",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        type: {
          title: "Type",
          type: "string",
          widget: "select",
          choices: [
            {
              key: "Detail",
              value: "detail"
            },
            {
              key: "Category",
              value: "category"
            },
            {
              key: "Root",
              value: "root"
            }
          ],
          description: "Chọn build template cho trang detail hoặc trang categoy",
          dependencies: {},
          enum: [
            "detail",
            "category",
            "root"
          ]
        },
        entity: {
          title: "Entity",
          type: [
            "array",
            "null",
            "string"
          ],
          description: "Chọn entity",
          widget: "relation",
          expanded: true,
          require: false,
          typeRelation: {
            _id: "entity",
            title: "entity",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "af5ddf67-b50e-4ee2-9274-bbf24a80a9b7"
            }
          },
          typeSelect: "multiple",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        templates: {
          title: "Templates",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          expanded: true,
          require: false,
          typeRelation: {
            title: "templates",
            _id: "templates",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "cb85b5b9-eb5f-481f-a27f-d6207d39b0ad"
            }
          },
          typeSelect: "multiple",
          filter: true,
          description: "Chọn template",
          dependencies: {},
          items: {
            type: "string"
          }
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
    languages: [
      {
        locale: "vi",
        slug: "layout"
      },
      {
        locale: "en",
        slug: "layout"
      }
    ],
    entity_setting: {
      fe_list: "title,\nslug,\ntype,\nentity(),\nentity.title,\nentity.mongodb_collection_name,\nentity.comment_mode,\ntemplates(header(),footer(),sidebar()),\ntemplates.title,\ntemplates.header.title,\ntemplates.header.data,\ntemplates.footer.title,\ntemplates.footer.data,\ntemplates.sidebar,\nlocale,\nlocale_id,\nblocks_position,\nlanguages,\nmeta_data.slug,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    },
    tenant_id: null,
    use_approval_process: false,
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    created_at: new Date("2025-08-26T03:11:34.152Z"),
    updated_at: new Date("2025-10-08T09:48:44.000Z"),
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    status: "1",
    comment_mode: false,
    use_slug: false
  };
}