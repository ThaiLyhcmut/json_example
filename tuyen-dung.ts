module.exports = function () {
  return {
    _id: "68be968ba7a13020c49cef85",
    title: "Tuyển dụng",
    mongodb_collection_name: "tuyen-dung",
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
          filter: false,
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
          filter: false,
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
          hidden: false,
          filter: true,
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
        session_tags: {
          title: "Session Tags",
          type: "object",
          properties: {
            session_tags_work_location: {
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
                      id: "5e156aee-35e1-4814-b155-8e2865c09245",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68be86fe7316a019f4b24e6f",
                          title: "Địa điểm làm việc",
                          slug: "dia-diem-lam-viec",
                          is_active: true,
                          locale_id: "68be86fe7316a019f4b24e6f",
                          locale: "vi",
                          status: 1,
                          tenant_id: "68a6a4a4e731734fad2cff97",
                          created_by: {
                            _id: "68a6a4a7e731734fad2cffae",
                            email: "admin2025@gmail.com",
                            username: "admin",
                            phone: 123567890,
                            password: "$2b$10$Ec5OA93g89Z3Lf0h1j5kZelqqH/pDtAi1nPkWuVPD3BnLKnhT.glG",
                            is_active: true,
                            role_system: "admin",
                            created_at: "2025-08-21T04:46:31.660Z",
                            updated_at: "2025-08-21T04:46:31.660Z",
                            role: [
                              "68a6a4a4e731734fad2cff99"
                            ],
                            full_name: "ADMIN",
                            featured_image: null,
                            first_name: "Admin",
                            last_name: "User",
                            birthday: "1999-03-11T17:00:00.000Z",
                            cover: null,
                            nickname: "abc",
                            updated_by: "68a6a4a7e731734fad2cffae",
                            locale: null,
                            locale_id: null,
                            id: "6711e8a47b45b2974bd6133c",
                            tenant_id: null,
                            created_by: "68a6a4a7e731734fad2cffae"
                          },
                          updated_by: {
                            _id: "68a6a4a7e731734fad2cffae",
                            email: "admin2025@gmail.com",
                            username: "admin",
                            phone: 123567890,
                            password: "$2b$10$Ec5OA93g89Z3Lf0h1j5kZelqqH/pDtAi1nPkWuVPD3BnLKnhT.glG",
                            is_active: true,
                            role_system: "admin",
                            created_at: "2025-08-21T04:46:31.660Z",
                            updated_at: "2025-08-21T04:46:31.660Z",
                            role: [
                              "68a6a4a4e731734fad2cff99"
                            ],
                            full_name: "ADMIN",
                            featured_image: null,
                            first_name: "Admin",
                            last_name: "User",
                            birthday: "1999-03-11T17:00:00.000Z",
                            cover: null,
                            nickname: "abc",
                            updated_by: "68a6a4a7e731734fad2cffae",
                            locale: null,
                            locale_id: null,
                            id: "6711e8a47b45b2974bd6133c",
                            tenant_id: null,
                            created_by: "68a6a4a7e731734fad2cffae"
                          },
                          created_at: "2025-09-08T14:34:22.000Z",
                          updated_at: "2025-09-08T14:36:41.000Z",
                          languages: []
                        }
                      ]
                    }
                  ],
                  id: "589771ab-e769-414b-bda7-e6b7cbe82109"
                }
              },
              title: "Địa điểm làm việc",
              typeSelect: "multiple",
              filter: true,
              dependencies: {},
              items: {
                type: "string"
              }
            }
          },
          dependencies: {},
          required: [],
          additionalProperties: false
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
        slug: "tuyen-dung"
      },
      {
        locale: "en",
        slug: "recruitment"
      }
    ],
    use_timestamp: true,
    use_approval_process: true,
    public_entity: true,
    mongodb_save_data: "post-type-content",
    status: "1",
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-08T15:40:43.000Z"),
    updated_at: new Date("2025-10-08T09:42:40.000Z"),
    use_slug: true,
    comment_mode: false,
    entity_setting: {
      fe_detail: "title,\nshort_description,\nlong_description,\npublished_at,\nsession_tags_session_tags_work_location(),\nsession_tags.session_tags_work_location.title,\nsession_tags.session_tags_work_location.slug,\nsession_tags.session_tags_work_location.tag_group.title,\nsession_tags.session_tags_work_location.tag_group.slug,\nsession_tags.session_tags_job_position.title,\nsession_tags.session_tags_job_position.slug,\nsession_tags.session_tags_job_position.tag_group.title,\nsession_tags.session_tags_job_position.tag_group.slug,\nsession_tags.session_tags_salary.title,\nsession_tags.session_tags_salary.slug,\nsession_tags.session_tags_salary.tag_group.title,\nsession_tags.session_tags_salary.tag_group.slug,\nsession_tags.session_tags_experience.title,\nsession_tags.session_tags_experience.slug,\nsession_tags.session_tags_experience.tag_group.title,\nsession_tags.session_tags_experience.tag_group.slug,\napplication_deadline,\nvacant_total,\nlocale,\nlocale_id,\npost_type,\ncreated_by(),\ncreated_by._id,\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.created_at,\ncreated_by.updated_at,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\nslug,\ncreated_at,\nupdated_at,\nis_pinned,\ncategory,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}