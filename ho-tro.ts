module.exports = function () {
  return {
    _id: "68da36183bdfb9581732fb1f",
    title: "Hỗ trợ",
    mongodb_collection_name: "ho-tro",
    mongodb_save_data: "post-type-content",
    unique_keys: "",
    use_timestamp: true,
    use_approval_process: true,
    use_slug: true,
    public_entity: false,
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
                  id: "5b90a00f-3031-4d5f-b761-b4214b82afd1",
                  field: "post_type",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68da36183bdfb9581732fb1f",
                      title: "Hỗ trợ",
                      mongodb_collection_name: "ho-tro",
                      mongodb_save_data: "post-type-content",
                      unique_keys: "",
                      use_timestamp: true,
                      use_approval_process: true,
                      use_slug: true,
                      public_entity: true,
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
                            hidden: false
                          },
                          published_at: {
                            widget: "date",
                            formatDate: "date",
                            displayFormat: "YYYY/MM/DD",
                            title: "Published At",
                            type: "string",
                            hidden: false
                          },
                          attachments: {
                            type: "string",
                            library_setting: "all",
                            widget: "multipleFiles",
                            title: "Attachments"
                          },
                          session_tags: {
                            title: "Session Tags",
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
                                    id: "f88e71ca-2893-4941-9b56-6e7b3471e104",
                                    field: "tag_group",
                                    operator: "in",
                                    valueSource: "value",
                                    value: [
                                      {
                                        _id: "68ca33bba177807d4b4f426b",
                                        title: "Câu hỏi thường gặp Tag",
                                        slug: "cau-hoi-thuong-gap-tag",
                                        is_active: true,
                                        locale_id: "68ca33bba177807d4b4f426b",
                                        locale: "vi",
                                        tenant_id: "68a6a4a4e731734fad2cff97",
                                        created_by: {
                                          _id: "68bff24bea9a0fc2edb3164e",
                                          username: "admin",
                                          email: "admin@gmail.cBrjtAWJgS.com",
                                          featured_image: [
                                            "68c9483fe7606448a37596df"
                                          ],
                                          cover: null,
                                          password: "$2b$10$gvcjQCukXNUKP5E/kruX0eNieKqNkn.pX5.7if14a6KVusBvR5iDK",
                                          role_system: "admin",
                                          is_active: true,
                                          role: [
                                            "68a6a4a4e731734fad2cff99"
                                          ],
                                          created_at: "2025-09-09T16:24:27.000Z",
                                          updated_at: "2025-09-16T18:24:18.000Z",
                                          full_name: "Trần Minh Phương Anh",
                                          slug: null
                                        },
                                        updated_by: {
                                          _id: "68bff24bea9a0fc2edb3164e",
                                          username: "admin",
                                          email: "admin@gmail.cBrjtAWJgS.com",
                                          featured_image: [
                                            "68c9483fe7606448a37596df"
                                          ],
                                          cover: null,
                                          password: "$2b$10$gvcjQCukXNUKP5E/kruX0eNieKqNkn.pX5.7if14a6KVusBvR5iDK",
                                          role_system: "admin",
                                          is_active: true,
                                          role: [
                                            "68a6a4a4e731734fad2cff99"
                                          ],
                                          created_at: "2025-09-09T16:24:27.000Z",
                                          updated_at: "2025-09-16T18:24:18.000Z",
                                          full_name: "Trần Minh Phương Anh",
                                          slug: null
                                        },
                                        created_at: "2025-09-17T11:06:19.000Z",
                                        updated_at: "2025-09-17T11:06:19.000Z",
                                        languages: [
                                          "vi"
                                        ],
                                        meta_data: {
                                          slug: "cau-hoi-thuong-gap-tag",
                                          redirect_to: null,
                                          type: "direct",
                                          entity: "tag-group"
                                        }
                                      }
                                    ]
                                  }
                                ],
                                id: "06043134-5153-4a2e-a76d-ce39c766aa76"
                              }
                            }
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
                          },
                          parent_id: {
                            title: "Parent ID",
                            type: "string",
                            widget: "relation",
                            typeRelation: {
                              title: "ho-tro",
                              id: "ho-tro"
                            }
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
                        attachments: {
                          "ui:widget": "multipleFiles"
                        },
                        session_tags: {
                          "ui:widget": "relation"
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
                          "attachments",
                          "session_tags",
                          "session_seo",
                          "parent_id"
                        ],
                        parent_id: {
                          "ui:widget": "relation"
                        }
                      },
                      status: "1",
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
                      slug: "ho-tro17591311604568134",
                      created_at: "2025-09-29T14:32:40.000Z",
                      updated_at: "2025-09-29T14:32:53.000Z",
                      entity_group: [],
                      is_active: true,
                      languages: [
                        {
                          locale: "vi",
                          slug: ""
                        },
                        {
                          locale: "en",
                          slug: ""
                        }
                      ],
                      use_block: true,
                      use_history: true,
                      use_locale: true,
                      use_parent: true,
                      use_parent_delete_childs: false,
                      use_pinned: true,
                      use_posttype: true,
                      use_seo_path: true,
                      use_soft_delete: true,
                      meta_data: {
                        slug: "ho-tro17591311604568134",
                        redirect_to: null,
                        type: "direct",
                        entity: "entity"
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
          is_tree: true,
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
          hidden: false,
          dependencies: {}
        },
        published_at: {
          widget: "date",
          formatDate: "date",
          displayFormat: "YYYY/MM/DD",
          title: "Published At",
          type: "string",
          hidden: false,
          dependencies: {},
          format: "date-time",
          toDate: true
        },
        attachments: {
          type: [
            "array",
            "null",
            "string"
          ],
          library_setting: "all",
          widget: "multipleFiles",
          title: "Attachments",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        session_tags: {
          title: "Session Tags",
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
                  id: "f88e71ca-2893-4941-9b56-6e7b3471e104",
                  field: "tag_group",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68ca33bba177807d4b4f426b",
                      title: "Câu hỏi thường gặp Tag",
                      slug: "cau-hoi-thuong-gap-tag",
                      is_active: true,
                      locale_id: "68ca33bba177807d4b4f426b",
                      locale: "vi",
                      tenant_id: "68a6a4a4e731734fad2cff97",
                      created_by: {
                        _id: "68bff24bea9a0fc2edb3164e",
                        username: "admin",
                        email: "admin@gmail.cBrjtAWJgS.com",
                        featured_image: [
                          "68c9483fe7606448a37596df"
                        ],
                        cover: null,
                        password: "$2b$10$gvcjQCukXNUKP5E/kruX0eNieKqNkn.pX5.7if14a6KVusBvR5iDK",
                        role_system: "admin",
                        is_active: true,
                        role: [
                          "68a6a4a4e731734fad2cff99"
                        ],
                        created_at: "2025-09-09T16:24:27.000Z",
                        updated_at: "2025-09-16T18:24:18.000Z",
                        full_name: "Trần Minh Phương Anh",
                        slug: null
                      },
                      updated_by: {
                        _id: "68bff24bea9a0fc2edb3164e",
                        username: "admin",
                        email: "admin@gmail.cBrjtAWJgS.com",
                        featured_image: [
                          "68c9483fe7606448a37596df"
                        ],
                        cover: null,
                        password: "$2b$10$gvcjQCukXNUKP5E/kruX0eNieKqNkn.pX5.7if14a6KVusBvR5iDK",
                        role_system: "admin",
                        is_active: true,
                        role: [
                          "68a6a4a4e731734fad2cff99"
                        ],
                        created_at: "2025-09-09T16:24:27.000Z",
                        updated_at: "2025-09-16T18:24:18.000Z",
                        full_name: "Trần Minh Phương Anh",
                        slug: null
                      },
                      created_at: "2025-09-17T11:06:19.000Z",
                      updated_at: "2025-09-17T11:06:19.000Z",
                      languages: [
                        "vi"
                      ],
                      meta_data: {
                        slug: "cau-hoi-thuong-gap-tag",
                        redirect_to: null,
                        type: "direct",
                        entity: "tag-group"
                      }
                    }
                  ]
                }
              ],
              id: "06043134-5153-4a2e-a76d-ce39c766aa76"
            }
          },
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
        parent_id: {
          title: "Parent ID",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "ho-tro",
            id: "ho-tro"
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
    status: "1",
    created_by: "68bff24bea9a0fc2edb3164e",
    updated_by: "68bff24bea9a0fc2edb3164e",
    slug: "ho-tro17591311604568134",
    created_at: new Date("2025-09-29T14:32:40.000Z"),
    updated_at: new Date("2025-10-08T09:30:31.000Z"),
    entity_group: [],
    is_active: 1,
    languages: [
      {
        locale: "vi",
        slug: "ho-tro"
      },
      {
        locale: "en",
        slug: "support"
      }
    ],
    use_block: true,
    use_history: true,
    use_locale: true,
    use_parent: true,
    use_parent_delete_childs: false,
    use_pinned: true,
    use_posttype: true,
    use_seo_path: true,
    use_soft_delete: true,
    comment_mode: false,
    entity_setting: {
      fe_detail: "title,\nslug,\ncategory(),\ncategory.title,\ncategory.slug,\nlong_description,\nfeatured_image(),\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.path,\nis_pinned,\nattachments(),\nattachments.fileName,\nattachments.mimeType,\nattachments.bucketName,\nattachments.title,\nattachments.path,\nlocale,\nlocale_id,\npost_type,\ncreated_by(featured_image()),\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\ncreated_at,\nupdated_at,\npublish_end,\npublish_start,\nsession_tags,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}