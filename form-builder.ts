module.exports = function () {
  return {
    _id: "6841454db00be2aa7b390cb9",
    title: "Form Builder",
    mongodb_collection_name: "form-builder",
    json_schema: {
      type: "object",
      properties: {
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
        redirect: {
          title: "Redirect",
          type: "string",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          description: "Redirect đến url sau khi submit thành công",
          filter: true,
          dependencies: {}
        },
        mongodb_collection_name: {
          widget: "UriKeyGen",
          title: "Mongodb Collection Name",
          type: "string",
          depend_field: "root_title",
          filter: true,
          hidden: false,
          dependencies: {}
        },
        entity_save_data: {
          widget: "shortAnswer",
          title: "Entity Save Data",
          type: "string",
          filter: false,
          default: "form-builder-content",
          hidden: true,
          dependencies: {}
        },
        template_mail: {
          title: "Template Mail",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          expanded: true,
          require: false,
          typeRelation: {
            title: "template-mail",
            _id: "template-mail",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "33493117-0da7-41e9-a568-efcde3b42ff4"
            }
          },
          typeSelect: "multiple",
          description: "Chọn template mail",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        json_schema: {
          widget: "href",
          typeUrl: "url",
          title: "Json",
          type: "object",
          dependencies: {}
        },
        ui_schema: {
          widget: "href",
          typeUrl: "url",
          title: "UI",
          type: "object",
          dependencies: {}
        },
        settings: {
          title: "Settings",
          type: "string",
          expanded: true,
          hidden: true,
          dependencies: {}
        }
      },
      required: [
        "title"
      ],
      dependencies: {},
      additionalProperties: false
    },
    languages: [
      {
        locale: "vi",
        slug: "form-builder"
      },
      {
        locale: "en",
        slug: "form-builder"
      }
    ],
    is_active: 1,
    use_locale: true,
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
    created_at: new Date("2025-05-08T04:53:11.882Z"),
    updated_at: new Date("2025-10-07T11:52:05.000Z"),
    entity_setting: {
      fe_list: "title,\nredirect,\nmongodb_collection_name,,\njson_schema,\nui_schema,\nlocale,\nlocale_id,\nslug,\nlanguages,\nmeta_data.slug,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    },
    settings: {},
    unique_keys: "",
    use_pinned: false,
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    status: "1",
    use_slug: false,
    comment_mode: false
  };
}