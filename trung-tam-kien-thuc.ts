module.exports = function () {
  return {
    _id: "68be98bfa7a13020c49cef92",
    title: "Trung tâm kiến thức",
    mongodb_collection_name: "trung-tam-kien-thuc",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    use_locale: true,
    use_block: true,
    use_seo_path: true,
    use_pinned: true,
    use_posttype: true,
    use_form_builder: false,
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
              rules: [
                {
                  id: "efffd773-845c-414e-811a-3bd3779664d0",
                  field: "post_type",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68be98bfa7a13020c49cef92",
                      title: "Trung tâm kiến thức",
                      mongodb_collection_name: "trung-tam-kien-thuc",
                      entity_group: [],
                      unique_keys: "",
                      use_parent_delete_childs: false,
                      use_locale: true,
                      use_block: true,
                      use_seo_path: true,
                      use_pinned: true,
                      use_posttype: true,
                      use_form_builder: false,
                      is_active: true,
                      json_schema: {
                        type: "object",
                        properties: {
                          title: {
                            title: "Title",
                            type: "string",
                            widget: "shortAnswer",
                            description: "Nhập title cho tin tức",
                            filter: true
                          },
                          slug: {
                            title: "Slug",
                            type: "string",
                            widget: "UriKeyGen",
                            depend_field: "root_title",
                            filter: true,
                            description: "Nhập thông tin slug"
                          },
                          category: {
                            title: "Category",
                            type: "string",
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
                            filter: true
                          },
                          featured_image: {
                            title: "Featured Image",
                            type: "string",
                            widget: "file",
                            description: "Chọn hình",
                            filter: true
                          },
                          short_description: {
                            title: "Short Description",
                            type: "string",
                            widget: "shortAnswer",
                            description: "Nhập mô tả"
                          },
                          long_description: {
                            title: "Long Description",
                            type: "string",
                            widget: "textarea",
                            customRole: "texteditor",
                            description: "Nhập nội dung"
                          },
                          is_pinned: {
                            title: "Is Pinned",
                            type: "boolean",
                            default: false,
                            widget: "boolean",
                            hidden: true
                          },
                          published_at: {
                            widget: "date",
                            formatDate: "date",
                            displayFormat: "YYYY/MM/DD",
                            title: "Published At",
                            type: "string",
                            hidden: true
                          },
                          session_tag_posts: {
                            title: "Session Tag Posts",
                            type: "string",
                            widget: "relation",
                            typeRelation: {
                              _id: "tag",
                              title: "tag",
                              type: "n-1",
                              filter: {
                                combinator: "and",
                                rules: [
                                  {
                                    id: "9a06e86e-ada4-4254-ad40-0472ce64727b",
                                    field: "tag_group",
                                    operator: "in",
                                    valueSource: "value",
                                    value: [
                                      {
                                        _id: "68be4fddebcb0630edf566e5",
                                        is_active: true,
                                        meta_data: {},
                                        title: "Tag post",
                                        slug: "tag-post",
                                        json_schema: {},
                                        ui_schema: {},
                                        locale_id: "68be4fddebcb0630edf566e5",
                                        locale: "vi",
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
                                        created_at: "2025-09-08T10:39:09.000Z",
                                        updated_at: "2025-09-08T10:39:30.000Z",
                                        languages: []
                                      }
                                    ]
                                  }
                                ],
                                id: "7ab4b562-1bac-405f-87d0-fa38aee22819"
                              }
                            }
                          },
                          attachments: {
                            title: "Attachments",
                            type: "string",
                            widget: "file",
                            hidden: true
                          },
                          session_seo: {
                            title: "Session SEO",
                            type: "object",
                            properties: {
                              meta_title: {
                                title: "Meta Title",
                                type: "string",
                                widget: "shortAnswer"
                              },
                              meta_description: {
                                title: "Meta Description",
                                type: "string",
                                widget: "textarea",
                                customRole: "textarea"
                              }
                            },
                            dependencies: {},
                            required: []
                          }
                        },
                        dependencies: {},
                        required: [
                          "title",
                          "slug"
                        ]
                      },
                      ui_schema: {
                        title: {
                          "ui:widget": "shortAnswer"
                        },
                        slug: {
                          "ui:widget": "UriKeyGen"
                        },
                        category: {
                          "ui:widget": "relation"
                        },
                        featured_image: {
                          "ui:widget": "file"
                        },
                        short_description: {
                          "ui:widget": "shortAnswer"
                        },
                        long_description: {
                          "ui:widget": "textarea"
                        },
                        is_pinned: {
                          "ui:widget": "boolean"
                        },
                        published_at: {
                          "ui:widget": "date"
                        },
                        session_tag_posts: {
                          "ui:widget": "relation"
                        },
                        attachments: {
                          "ui:widget": "file"
                        },
                        session_seo: {
                          meta_title: {
                            "ui:widget": "shortAnswer"
                          },
                          meta_description: {
                            "ui:widget": "textarea"
                          },
                          "ui:order": [
                            "meta_title",
                            "meta_description"
                          ]
                        },
                        "ui:order": [
                          "title",
                          "slug",
                          "category",
                          "featured_image",
                          "short_description",
                          "long_description",
                          "is_pinned",
                          "published_at",
                          "session_tag_posts",
                          "attachments",
                          "session_seo"
                        ]
                      },
                      languages: [
                        {
                          locale: "vi",
                          slug: "kien-thuc"
                        },
                        {
                          locale: "en",
                          slug: "knowledge"
                        }
                      ],
                      use_timestamp: true,
                      use_approval_process: true,
                      public_entity: true,
                      mongodb_save_data: "post-type-content",
                      status: "1",
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
                      created_at: "2025-09-08T15:50:07.000Z",
                      updated_at: "2025-10-06T15:54:32.000Z",
                      use_slug: true,
                      comment_mode: true,
                      use_history: true,
                      use_soft_delete: true,
                      entity_setting: {
                        fe_detail: "title,\nslug,\ncategory.title,\ncategory.slug,\nfeatured_image.disk,\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.bucketName,\nfeatured_image.path,\nlong_description,\nis_pinned,\nsession_tag_posts.title,\nsession_tag_posts.slug,\nsession_tag_posts.tag_group.title,\nsession_tag_posts.tag_group.slug,\nlocale,\nlocale_id,\npost_type,\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\ncreated_at,\nupdated_at,\nblocks_position,\nshort_description,\npublish_end,\npublish_start,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
                      }
                    }
                  ]
                }
              ],
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
        session_tag_posts: {
          title: "Session Tag Posts",
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
                  id: "9a06e86e-ada4-4254-ad40-0472ce64727b",
                  field: "tag_group",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68be4fddebcb0630edf566e5",
                      is_active: true,
                      meta_data: {},
                      title: "Tag post",
                      slug: "tag-post",
                      json_schema: {},
                      ui_schema: {},
                      locale_id: "68be4fddebcb0630edf566e5",
                      locale: "vi",
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
                      created_at: "2025-09-08T10:39:09.000Z",
                      updated_at: "2025-09-08T10:39:30.000Z",
                      languages: []
                    }
                  ]
                }
              ],
              id: "7ab4b562-1bac-405f-87d0-fa38aee22819"
            }
          },
          dependencies: {},
          items: {
            type: "string"
          }
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
        slug: "kien-thuc"
      },
      {
        locale: "en",
        slug: "knowledge"
      }
    ],
    use_timestamp: true,
    use_approval_process: true,
    public_entity: true,
    mongodb_save_data: "post-type-content",
    status: "1",
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-08T15:50:07.000Z"),
    updated_at: new Date("2025-10-08T09:41:33.000Z"),
    use_slug: true,
    comment_mode: true,
    use_history: true,
    use_soft_delete: true,
    entity_setting: {
      fe_detail: "title,\nslug,\ncategory(),\ncategory.title,\ncategory.slug,\nfeatured_image(),\nfeatured_image.disk,\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.bucketName,\nfeatured_image.path,\nlong_description,\nis_pinned,\nsession_tag_posts(),\nsession_tag_posts.title,\nsession_tag_posts.slug,\nsession_tag_posts.tag_group.title,\nsession_tag_posts.tag_group.slug,\nlocale,\nlocale_id,\npost_type,\ncreated_by(),\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\ncreated_at,\nupdated_at,\nblocks_position,\nshort_description,\npublish_end,\npublish_start,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}