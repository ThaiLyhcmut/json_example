module.exports = function () {
  return {
    _id: "67a1b30e1aaf205cfbd70e02",
    title: "Notification record",
    mongodb_collection_name: "notification-record",
    languages: [],
    is_active: true,
    use_locale: false,
    use_parent: false,
    use_parent_delete_childs: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    use_seo_path: false,
    entity_group: null,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2025-02-04T06:26:22.992Z"),
    updated_at: new Date("2025-02-04T08:23:49.907Z"),
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "title",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        type: {
          title: "type",
          type: "string",
          widget: "select",
          choices: [
            {
              key: "test",
              value: "test"
            }
          ],
          dependencies: {},
          enum: [
            "test"
          ]
        },
        to_user: {
          title: "to_user",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "user",
            _id: "user",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "7aa06db2-fecb-47d2-83a5-a7fb72aa3eb9"
            }
          },
          dependencies: {},
          items: {
            type: "string"
          }
        },
        group: {
          title: "group",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "mge-group",
            _id: "mge-group",
            type: "1-n"
          },
          dependencies: {},
          items: {
            type: "string"
          }
        }
      },
      required: [
        "title",
        "type",
        "to_user"
      ],
      dependencies: {},
      additionalProperties: false
    },
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}