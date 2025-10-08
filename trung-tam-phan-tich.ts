module.exports = function () {
  return {
    _id: "68bfa10a8f1645d385dcb42b",
    title: "Trung tâm phân tích",
    mongodb_collection_name: "trung-tam-phan-tich",
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
              rules: [
                {
                  id: "d15ba62f-75c7-412a-a0ee-dd2a26d3476f",
                  field: "post_type",
                  operator: "in",
                  valueSource: "value",
                  value: [
                    {
                      _id: "68bfa10a8f1645d385dcb42b",
                      title: "Trung tâm phân tích",
                      mongodb_collection_name: "trung-tam-phan-tich",
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
                          locale_id: {
                            widget: "shortAnswer",
                            title: "Locale ID",
                            type: "string",
                            hidden: true
                          },
                          locale: {
                            widget: "shortAnswer",
                            title: "Locale",
                            type: "string",
                            hidden: true
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
                            title: "Attachments"
                          },
                          raw_attachments: {
                            widget: "shortAnswer",
                            title: "Raw Attachments",
                            type: "string",
                            filter: false,
                            hidden: true
                          },
                          raw_published_at: {
                            widget: "shortAnswer",
                            title: "Raw Attachments",
                            type: "string",
                            filter: false,
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
                          },
                          session_tags: {
                            title: "Session Tags",
                            type: "object",
                            properties: {
                              year: {
                                type: "string",
                                widget: "relation",
                                typeRelation: {
                                  _id: "tag",
                                  title: "tag",
                                  type: "n-1",
                                  filter: {
                                    combinator: "and",
                                    rules: [],
                                    id: "2f6041ea-92ab-4a77-adf7-c4c744d40aa5"
                                  }
                                },
                                title: "Year",
                                filter: true
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
                        locale_id: {
                          "ui:widget": "shortAnswer"
                        },
                        locale: {
                          "ui:widget": "shortAnswer"
                        },
                        published_at: {
                          "ui:widget": "date"
                        },
                        attachments: {
                          "ui:widget": "multipleFiles"
                        },
                        raw_attachments: {
                          "ui:widget": "shortAnswer"
                        },
                        raw_published_at: {
                          "ui:widget": "shortAnswer"
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
                        "ui:order": [
                          "title",
                          "slug",
                          "category",
                          "featured_image",
                          "short_description",
                          "long_description",
                          "is_pinned",
                          "locale_id",
                          "locale",
                          "published_at",
                          "attachments",
                          "raw_attachments",
                          "raw_published_at",
                          "session_seo",
                          "session_tags"
                        ]
                      },
                      languages: [
                        {
                          locale: "vi",
                          slug: "trung-tam-phan-tich"
                        },
                        {
                          locale: "en",
                          slug: "analysis-center"
                        }
                      ],
                      use_timestamp: true,
                      use_approval_process: true,
                      public_entity: true,
                      mongodb_save_data: "post-type-content",
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
                      created_at: "2025-09-09T10:37:46.000Z",
                      updated_at: "2025-10-06T15:34:19.000Z",
                      use_slug: false,
                      status: "1",
                      comment_mode: false,
                      entity_setting: {
                        fe_detail: "title,\nslug,\ncategory.title,\ncategory.slug,\nshort_description,\nlong_description,\nis_pinned,\nlocale_id,\nlocale,\npublished_at,\nattachments.fileName,\nattachments.mimeType,\nattachments.bucketName,\nattachments.path,\nsession_tags.year.title,\nsession_tags.year.slug,\nsession_tags.year.tag_group.title,\nsession_tags.year.tag_group.slug,\npost_type,\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\ncreated_at,\nupdated_at,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
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
        locale_id: {
          widget: "shortAnswer",
          title: "Locale ID",
          type: "string",
          hidden: true,
          dependencies: {}
        },
        locale: {
          widget: "shortAnswer",
          title: "Locale",
          type: "string",
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
        raw_attachments: {
          widget: "shortAnswer",
          title: "Raw Attachments",
          type: "string",
          filter: false,
          hidden: true,
          dependencies: {}
        },
        raw_published_at: {
          widget: "shortAnswer",
          title: "Raw Attachments",
          type: "string",
          filter: false,
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
                  id: "2f6041ea-92ab-4a77-adf7-c4c744d40aa5"
                }
              },
              title: "Year",
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
        slug: "trung-tam-phan-tich"
      },
      {
        locale: "en",
        slug: "analysis-center"
      }
    ],
    use_timestamp: true,
    use_approval_process: true,
    public_entity: true,
    mongodb_save_data: "post-type-content",
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-09T10:37:46.000Z"),
    updated_at: new Date("2025-10-08T09:36:15.000Z"),
    use_slug: false,
    status: "1",
    comment_mode: false,
    entity_setting: {
      fe_detail: "title,\nslug,\ncategory(),\ncategory.title,\ncategory.slug,\nshort_description,\nlong_description,\nis_pinned,\nlocale_id,\nlocale,\npublished_at,\nattachments(),\nattachments.fileName,\nattachments.mimeType,\nattachments.bucketName,\nattachments.path,\nsession_tags_year(),\nsession_tags.year.title,\nsession_tags.year.slug,\nsession_tags.year.tag_group.title,\nsession_tags.year.tag_group.slug,\npost_type,\ncreated_by(featured_image())\ncreated_by.username,\ncreated_by.is_active,\ncreated_by.full_name,\ncreated_by.first_name,\ncreated_by.last_name,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.mimeType,\ncreated_by.featured_image.path,\ncreated_at,\nupdated_at,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}