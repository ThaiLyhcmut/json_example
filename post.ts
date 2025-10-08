module.exports = function () {
  return {
    _id: "68d3c99d3f62bf832a3a6fd7",
    title: "Tin tức",
    mongodb_collection_name: "post",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    use_timestamp: true,
    use_approval_process: true,
    use_slug: true,
    public_entity: true,
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
                  id: "ef9fe679-923d-4f40-91a6-5c80aedcf654",
                  field: "post_type",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68d3c99d3f62bf832a3a6fd7",
                      title: "Tin tức",
                      mongodb_collection_name: "post",
                      entity_group: [],
                      unique_keys: "",
                      use_parent_delete_childs: false,
                      use_timestamp: true,
                      use_approval_process: true,
                      use_slug: true,
                      public_entity: true,
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
                            hidden: false
                          },
                          published_at: {
                            widget: "date",
                            formatDate: "date",
                            displayFormat: "YYYY/MM/DD",
                            title: "Published At",
                            type: "string",
                            hidden: false,
                            filter: true
                          },
                          attachments: {
                            type: "string",
                            library_setting: "all",
                            widget: "multipleFiles",
                            title: "Attachments",
                            filter: true
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
                          session_tags: {
                            title: "Session Tags",
                            type: "object",
                            properties: {
                              year: {
                                title: "Year",
                                type: "string",
                                widget: "relation",
                                typeRelation: {
                                  _id: "tag",
                                  title: "tag",
                                  type: "n-1",
                                  filter: {
                                    combinator: "and",
                                    rules: [],
                                    id: "80e0401d-4b0e-453c-8b31-ecb0b0c879dd"
                                  }
                                },
                                filter: true
                              }
                            },
                            dependencies: {},
                            required: []
                          },
                          status: {
                            title: "Status",
                            type: "string",
                            widget: "relation",
                            typeRelation: {
                              _id: "rule",
                              title: "rule",
                              type: "n-1",
                              filter: {
                                combinator: "and",
                                rules: [],
                                id: "eaa90f5d-6a95-45a4-8685-b959067b0478"
                              }
                            },
                            refValue: "code",
                            hidden: true,
                            filter: true
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
                        session_tags: {
                          year: {
                            "ui:widget": "relation"
                          },
                          "ui:order": [
                            "year"
                          ]
                        },
                        status: {
                          "ui:widget": "relation"
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
                          "session_seo",
                          "session_tags",
                          "status"
                        ]
                      },
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
                      slug: "post",
                      created_at: "2025-09-24T17:36:13.000Z",
                      updated_at: "2025-10-06T15:40:30.000Z",
                      use_pinned: true,
                      use_posttype: true,
                      use_seo_path: true,
                      mongodb_save_data: "post-type-content",
                      status: "1",
                      languages: [
                        {
                          locale: "vi",
                          slug: "post"
                        },
                        {
                          locale: "en",
                          slug: "post"
                        }
                      ],
                      use_locale: true,
                      comment_mode: true,
                      entity_setting: {
                        fe_detail: "title,\nslug,\ncategory.is_root,\ncategory.title,\ncategory.slug,\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.path,\nlong_description,\npublished_at,\nattachments.fileName,\nattachments.mimeType,\nattachments.bucketName,\nattachments.title,\nattachments.path,\nsession_tags.year.title,\nsession_tags.year.slug,\nsession_tags.year.tag_group.title,\nsession_tags.year.tag_group.slug,\nsession_tags.year.tag_group.is_active,\nsession_tags.year.is_active,\nsession_seo.meta_title,\nsession_seo.meta_description,\nlocale,\nlocale_id,\npost_type,\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\nis_pinned,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
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
          filter: true,
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
          filter: true,
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
          title: "Session Tags",
          type: "object",
          properties: {
            year: {
              title: "Year",
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
                  rules: [],
                  id: "80e0401d-4b0e-453c-8b31-ecb0b0c879dd"
                }
              },
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
        status: {
          title: "Status",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            _id: "rule",
            title: "rule",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "eaa90f5d-6a95-45a4-8685-b959067b0478"
            }
          },
          refValue: "code",
          hidden: true,
          filter: true,
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
    created_by: "68bff24bea9a0fc2edb3164e",
    updated_by: "68bff24bea9a0fc2edb3164e",
    slug: "post",
    created_at: new Date("2025-09-24T17:36:13.000Z"),
    updated_at: new Date("2025-10-08T09:37:11.000Z"),
    use_pinned: true,
    use_posttype: true,
    use_seo_path: true,
    mongodb_save_data: "post-type-content",
    status: "1",
    languages: [
      {
        locale: "vi",
        slug: "post"
      },
      {
        locale: "en",
        slug: "post"
      }
    ],
    use_locale: true,
    comment_mode: true,
    entity_setting: {
      fe_detail: "title,\nslug,\ncategory(),\ncategory.is_root,\ncategory.title,\ncategory.slug,\nfeatured_image(),\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.path,\nlong_description,\npublished_at,\nattachments(),\nattachments.fileName,\nattachments.mimeType,\nattachments.bucketName,\nattachments.title,\nattachments.path,\nsession_tags(),\nsession_tags.year.title,\nsession_tags.year.slug,\nsession_tags.year.tag_group.title,\nsession_tags.year.tag_group.slug,\nsession_tags.year.tag_group.is_active,\nsession_tags.year.is_active,\nsession_seo.meta_title,\nsession_seo.meta_description,\nlocale,\nlocale_id,\npost_type,\ncreated_by(),\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\nis_pinned,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}