module.exports = function () {
  return {
    _id: "67a0307c545d084698a9aaee",
    title: "Notification",
    mongodb_collection_name: "notification",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập title",
          filter: true,
          dependencies: {}
        },
        title_input: {
          title: "title_input",
          type: "string",
          widget: "shortAnswer",
          description: "Dùng @user.name hoặc @group.name để map vào title_input để hiện bên fe",
          dependencies: {}
        },
        advance: {
          title: "Advance",
          type: "string",
          widget: "function",
          description: "*Mặc định là sẽ truy cập vào collection User.",
          dependencies: {}
        }
      },
      required: [
        "title",
        "title_input",
        "advance"
      ],
      dependencies: {},
      additionalProperties: false
    },
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
    created_at: new Date("2025-02-03T02:57:00.209Z"),
    updated_at: new Date("2025-02-04T08:18:57.114Z"),
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}