module.exports = function () {
  return {
    _id: "68b80c7d2e996f15aea9d576",
    title: "Page",
    mongodb_collection_name: "page",
    entity_group: [],
    unique_keys: "",
    use_parent: false,
    use_parent_delete_childs: false,
    use_locale: true,
    use_block: true,
    use_seo_path: true,
    use_pinned: false,
    is_active: true,
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          description: "Nhập title cho page",
          dependencies: {}
        },
        slug: {
          widget: "UriKeyGen",
          title: "Slug",
          type: "string",
          depend_field: "root_title",
          filter: true,
          description: "Nhập slug",
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
          description: "Chọn hình",
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
          typeRelation: {
            title: "templates",
            _id: "templates",
            type: "n-1"
          },
          description: "Chọn templates",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        locale: {
          filter: true,
          hidden: true,
          title: "Locale",
          type: "string",
          widget: "select",
          allowNull: false,
          choices: [
            {
              key: "VI",
              value: "vi"
            },
            {
              key: "EN",
              value: "en"
            }
          ],
          default: "",
          isMultiple: false,
          returnValue: 2,
          dependencies: {},
          enum: [
            "vi",
            "en"
          ]
        },
        short_description: {
          widget: "longAnswer",
          customRole: "textarea",
          title: "Short Description",
          type: "string",
          filter: true,
          dependencies: {}
        },
        long_description: {
          title: "Long Description",
          type: "string",
          widget: "textarea",
          customRole: "texteditor",
          description: "Nhập nội dung",
          dependencies: {}
        },
        locale_id: {
          title: "Locale ID",
          type: "string",
          widget: "textarea",
          customRole: "texteditor",
          description: "Nhập nội dung",
          hidden: true,
          filter: false,
          dependencies: {}
        },
        blocks: {
          type: "object",
          title: "Blocks",
          hidden: true,
          dependencies: {}
        },
        session_seo: {
          title: "Session SEO",
          type: "object",
          properties: {
            meta_title: {
              title: "Meta Title",
              type: "string",
              widget: "shortAnswer",
              description: "Nhập title cho meta",
              dependencies: {}
            },
            meta_description: {
              title: "Meta Description",
              type: "string",
              widget: "textarea",
              customRole: "textarea",
              description: "Nhập mô tả cho meta",
              dependencies: {}
            }
          },
          dependencies: {},
          required: [],
          additionalProperties: false
        },
        version: {
          hidden: true,
          title: "Version",
          type: "number",
          widget: "numberInput",
          dependencies: {}
        },
        newInput1: {
          title: "blocks_position",
          type: "object",
          description: "blocks_position",
          dependencies: {}
        },
        is_active: {
          type: "boolean",
          default: true,
          widget: "boolean",
          title: "Is Active",
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [
      {
        locale: "vi",
        slug: "page"
      },
      {
        locale: "en",
        slug: "page"
      }
    ],
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_by: "68a6a4a7e731734fad2cffae",
    tenant_id: null,
    use_approval_process: false,
    entity_setting: {
      fe_list: "title,\nslug,\nshort_description,\nlong_description\nlocale,\nlocale_id,\nblocks_position,\nmeta_data.slug,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path",
      fe_detail: "featured_image(),\nfeatured_images.disk,\nfeatured_images.fileName,\nfeatured_images.mimeType,\nfeatured_images.bucketName,\nfeatured_images.path,\nlocale,\nsession_seo.meta_description,\nsession_seo.meta_title,\nlocale_id,\nblocks_position,\nslug,\ntitle,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field_title,\nmeta_data.entity_field,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    },
    meta_data: {},
    updated_at: new Date("2025-10-08T09:45:58.000Z"),
    slug: "page",
    use_slug: false,
    comment_mode: false,
    status: "1"
  };
}