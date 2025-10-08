module.exports = function () {
  return {
    _id: "68be9c06a7a13020c49cef95",
    title: "Khóa học",
    mongodb_collection_name: "khoa-hoc",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    use_locale: true,
    use_block: true,
    use_seo_path: true,
    use_pinned: true,
    use_posttype: true,
    is_active: true,
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập title cho tin tức",
          filter: true,
          dependencies: {}
        },
        slug: {
          title: "Slug",
          type: "string",
          widget: "UriKeyGen",
          depend_field: "root_title",
          filter: true,
          description: "Nhập thông tin slug",
          dependencies: {}
        },
        category: {
          title: "Category",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            _id: "category",
            title: "category",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "f916bd53-38d4-46d5-b2da-9115a996ddc8"
            }
          },
          description: "Chọn danh mục",
          filter: true,
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
          widget: "file",
          description: "Chọn hình",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        short_description: {
          title: "Short Description",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập mô tả",
          dependencies: {}
        },
        link_video: {
          title: "Link Video",
          type: "string",
          widget: "shortAnswer",
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
        is_pinned: {
          title: "Is Pinned",
          type: "boolean",
          default: false,
          widget: "boolean",
          hidden: true,
          dependencies: {}
        },
        published_at: {
          widget: "date",
          formatDate: "date",
          displayFormat: "YYYY/MM/DD",
          title: "Published At",
          type: "string",
          hidden: true,
          dependencies: {},
          format: "date-time",
          toDate: true
        },
        attachments: {
          title: "Attachments",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "file",
          hidden: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        session_seo: {
          title: "Session SEO",
          type: "object",
          properties: {
            meta_title: {
              title: "Meta Title",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            },
            meta_description: {
              title: "Meta Description",
              type: "string",
              widget: "textarea",
              customRole: "textarea",
              dependencies: {}
            }
          },
          dependencies: {},
          required: [],
          additionalProperties: false
        },
        session_tags: {
          title: "Session tag",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            _id: "tag",
            title: "tag",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [
                {
                  id: "815287e5-4557-4c8c-af7a-75b74fea474d",
                  field: "tag_group",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68d129ac7543b68600fa9f6a",
                      title: "Trình độ",
                      slug: "trinh-do",
                      is_active: true,
                      locale_id: "68d129ac7543b68600fa9f6a",
                      locale: "vi",
                      tenant_id: "68a6a4a4e731734fad2cff97",
                      created_by: {
                        _id: "68bff24bea9a0fc2edb3164e",
                        username: "admin",
                        featured_image: null,
                        cover: null,
                        is_active: true,
                        created_at: "2025-09-09T16:24:27.000Z",
                        updated_at: "2025-09-30T18:08:59.000Z",
                        full_name: "Trần Minh Phương Anh",
                        status: "1",
                        first_name: "Trần MInh",
                        last_name: "Phương Anh"
                      },
                      updated_by: {
                        _id: "68bff24bea9a0fc2edb3164e",
                        username: "admin",
                        featured_image: null,
                        cover: null,
                        is_active: true,
                        created_at: "2025-09-09T16:24:27.000Z",
                        updated_at: "2025-09-30T18:08:59.000Z",
                        full_name: "Trần Minh Phương Anh",
                        status: "1",
                        first_name: "Trần MInh",
                        last_name: "Phương Anh"
                      },
                      created_at: "2025-09-22T17:49:16.000Z",
                      updated_at: "2025-09-22T17:49:16.000Z",
                      languages: [
                        "vi"
                      ],
                      meta_data: {
                        slug: "trinh-do",
                        redirect_to: null,
                        type: "direct",
                        entity: "tag-group"
                      }
                    }
                  ]
                }
              ],
              id: "72f4f899-0459-49ff-8e47-8d7cca58f694"
            }
          },
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
    languages: [
      {
        locale: "vi",
        slug: "khoa-hoc"
      },
      {
        locale: "en",
        slug: "course"
      }
    ],
    use_timestamp: true,
    use_approval_process: true,
    public_entity: true,
    mongodb_save_data: "post-type-content",
    status: "1",
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-08T16:04:06.000Z"),
    updated_at: new Date("2025-10-08T09:38:22.000Z"),
    use_slug: false,
    comment_mode: true,
    entity_setting: {
      fe_detail: "title,\nslug,\ncategory(),\ncategory.title,\ncategory.slug,\nfeatured_image(),\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.bucketName,\nfeatured_image.path,\nlink_video,\nis_pinned,\nlocale,\nlocale_id,\npost_type,\ncreated_by()\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\ncreated_at,\nupdated_at,\nblocks_position,\nsession_tags(),\nsession_tags.title,\nsession_tags.slug,\nsession_tags.tag_group.title,\nsession_tags.tag_group.slug,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}