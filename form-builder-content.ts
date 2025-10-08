module.exports = function () {
  return {
    _id: "68416692b00be2aa7b390cbf",
    title: "Form Builder Content",
    mongodb_collection_name: "form-builder-content",
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
    created_at: new Date("2025-05-08T04:53:20.471Z"),
    updated_at: new Date("2025-06-05T09:43:18.492Z"),
    entity_setting: {},
    json_schema: {
      type: "object",
      properties: {
        form_builder: {
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          expanded: true,
          require: false,
          typeRelation: {
            title: "form-builder",
            _id: "form-builder",
            type: "1-n"
          },
          typeSelect: "multiple",
          filter: true,
          title: "Form Builder",
          dependencies: {},
          items: {
            type: "string"
          }
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}