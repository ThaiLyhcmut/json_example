module.exports = function () {
  return {
    _id: "68bfcc36a3f2ab0e1ca22c49",
    title: "Sản phẩm",
    mongodb_collection_name: "san-pham",
    entity_group: [],
    unique_keys: "",
    use_parent: true,
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
        parent_id: {
          title: "Parent ID",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "san-pham",
            id: "san-pham",
            filter: {
              combinator: "and",
              rules: [],
              id: "de6126fc-ac62-4282-9155-6d692559e8e5"
            }
          },
          dependencies: {},
          items: {
            type: "string"
          }
        },
        session_product_tags: {
          title: "Session Product Tags",
          type: "object",
          properties: {
            investment_amount: {
              title: "Investment Amount",
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
                      id: "5df5ceed-9a03-41cb-a489-7e6bab0cfd9e",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68c969ec98dead9a5376e54d",
                          title: "Số tiền bạn muốn đầu tư",
                          slug: "so-tien-ban-muon-dau-tu-1758030316872",
                          is_active: true,
                          locale_id: "68c969ec98dead9a5376e54d",
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
                          created_at: "2025-09-16T20:45:16.000Z",
                          updated_at: "2025-09-16T20:45:16.000Z",
                          languages: [
                            "vi"
                          ],
                          meta_data: {
                            slug: "so-tien-ban-muon-dau-tu-1758030316872",
                            redirect_to: null,
                            type: "direct",
                            entity: "tag-group"
                          }
                        }
                      ]
                    }
                  ],
                  id: "3bb43d57-92b7-4205-b5a7-7f27c3cfeb67"
                }
              },
              dependencies: {},
              items: {
                type: "string"
              }
            },
            investment_time: {
              title: "Investment Time",
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
                      id: "5df5ceed-9a03-41cb-a489-7e6bab0cfd9e",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68c969f498dead9a5376e54f",
                          title: "Trong bao lâu",
                          slug: "trong-bao-lau-1758030324488",
                          is_active: true,
                          locale_id: "68c969f498dead9a5376e54f",
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
                          created_at: "2025-09-16T20:45:24.000Z",
                          updated_at: "2025-09-16T20:45:24.000Z",
                          languages: [
                            "vi"
                          ],
                          meta_data: {
                            slug: "trong-bao-lau-1758030324488",
                            redirect_to: null,
                            type: "direct",
                            entity: "tag-group"
                          }
                        }
                      ]
                    }
                  ],
                  id: "3bb43d57-92b7-4205-b5a7-7f27c3cfeb67"
                }
              },
              dependencies: {},
              items: {
                type: "string"
              }
            },
            purpose: {
              title: "Purpose",
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
                      id: "5df5ceed-9a03-41cb-a489-7e6bab0cfd9e",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68c964d898dead9a5376e542",
                          title: "Mục đích",
                          slug: "muc-dich",
                          is_active: true,
                          locale_id: "68c964d898dead9a5376e542",
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
                          created_at: "2025-09-16T20:23:36.000Z",
                          updated_at: "2025-09-16T20:23:36.000Z",
                          languages: [
                            "vi"
                          ],
                          meta_data: {
                            slug: "muc-dich",
                            redirect_to: null,
                            type: "direct",
                            entity: "tag-group"
                          }
                        }
                      ]
                    }
                  ],
                  id: "3bb43d57-92b7-4205-b5a7-7f27c3cfeb67"
                }
              },
              dependencies: {},
              items: {
                type: "string"
              }
            }
          },
          dependencies: {},
          required: [],
          description: "Các field dùng để lọc",
          additionalProperties: false
        },
        session_tags: {
          title: "Session Tags",
          type: "object",
          properties: {
            transaction_fee: {
              title: "Transaction Fee",
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
                      id: "3bb4a909-ba2b-4b10-af36-ebb10a0701dc",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68ca3fe593f8f8f5c9ae7aed",
                          title: "Phí giao dịch hấp dẫn",
                          slug: "phi-giao-dich-hap-dan",
                          is_active: true,
                          locale_id: "68ca3fe593f8f8f5c9ae7aed",
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
                          created_at: "2025-09-17T11:58:13.000Z",
                          updated_at: "2025-09-17T11:58:13.000Z",
                          languages: [
                            "vi"
                          ]
                        }
                      ]
                    }
                  ],
                  id: "33d310f8-5e9e-4e64-b29a-66754fe6f27d"
                }
              },
              dependencies: {},
              items: {
                type: "string"
              }
            },
            investment_consultant: {
              title: "Investment Consultant",
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
                      id: "3bb4a909-ba2b-4b10-af36-ebb10a0701dc",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68ca400593f8f8f5c9ae7aef",
                          title: "Chuyên gia tư vấn đầu tư",
                          slug: "chuyen-gia-tu-van-dau-tu",
                          is_active: true,
                          locale_id: "68ca400593f8f8f5c9ae7aef",
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
                          created_at: "2025-09-17T11:58:45.000Z",
                          updated_at: "2025-09-17T11:58:45.000Z",
                          languages: [
                            "vi"
                          ]
                        }
                      ]
                    }
                  ],
                  id: "33d310f8-5e9e-4e64-b29a-66754fe6f27d"
                }
              },
              dependencies: {},
              items: {
                type: "string"
              }
            },
            market_report_amount: {
              title: "Market Analysis Report Amount",
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
                      id: "3bb4a909-ba2b-4b10-af36-ebb10a0701dc",
                      field: "tag_group",
                      operator: "in",
                      valueSource: "value",
                      value: [
                        {
                          _id: "68ca401a93f8f8f5c9ae7af1",
                          title: "Báo cáo phân tích thị trường/tháng",
                          slug: "bao-cao-phan-tich-thi-truongthang",
                          is_active: true,
                          locale_id: "68ca401a93f8f8f5c9ae7af1",
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
                          created_at: "2025-09-17T11:59:06.000Z",
                          updated_at: "2025-09-17T11:59:06.000Z",
                          languages: [
                            "vi"
                          ]
                        }
                      ]
                    }
                  ],
                  id: "33d310f8-5e9e-4e64-b29a-66754fe6f27d"
                }
              },
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
        cta_button: {
          title: "CTA Button",
          type: "object",
          widget: "href",
          dependencies: {}
        },
        advanced_product_info: {
          title: "Advanced Product Information",
          type: "object",
          properties: {
            product_name: {
              title: "Product Name",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            },
            product_information: {
              title: "Information",
              type: "string",
              widget: "textarea",
              customRole: "texteditor",
              dependencies: {}
            },
            investment_catalog: {
              title: "Investment Catalog",
              type: "string",
              widget: "textarea",
              customRole: "texteditor",
              dependencies: {}
            },
            asset_allocation: {
              items: {
                type: "object",
                dependencies: {},
                properties: {
                  label: {
                    title: "Label",
                    type: "string",
                    widget: "shortAnswer"
                  },
                  value: {
                    type: "string",
                    widget: "shortAnswer",
                    title: "Value"
                  }
                },
                additionalProperties: false
              },
              title: "Asset Allocation",
              type: "array",
              dependencies: {}
            },
            profit_label: {
              title: "Profit Label",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            },
            profit_value: {
              title: "Profit Value",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            },
            profit_description: {
              title: "Profit Description",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            },
            attribute_bond_product: {
              items: {
                type: "object",
                dependencies: {},
                properties: {
                  description: {
                    type: "string",
                    widget: "textarea",
                    customRole: "texteditor",
                    title: "Description"
                  }
                },
                additionalProperties: false
              },
              title: "Attribute Bond Product",
              type: "array",
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
        slug: "san-pham"
      },
      {
        locale: "en",
        slug: "product"
      }
    ],
    use_history: true,
    use_timestamp: true,
    use_approval_process: true,
    public_entity: true,
    mongodb_save_data: "post-type-content",
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-09T13:41:58.000Z"),
    updated_at: new Date("2025-10-08T09:25:54.000Z"),
    use_slug: true,
    status: "1",
    comment_mode: false,
    entity_setting: {
      fe_detail: "post_type,\ntitle,\nslug,\ncategory(),\ncategory.title,\ncategory.slug,\nfeatured_image(),\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.path,\nis_pinned,\nlocale,\nlocale_id,\ncreated_at,\nupdated_at,\nblocks_position.group,\nblocks_position.blocks,\nshort_description,\nlong_descripiton\npublish_end,\npublish_start,\nlanguages,\nmeta_data.slug,\nmeta_data.entity,\nmeta_data.entity_field,\nmeta_data.entity_field_id,\nmeta_data.entity_field_title,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    }
  };
}