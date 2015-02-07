var Schema = {
  user: {
    id: {type: 'increments', nullable: false, primary: true},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },

  tag: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },

  lesson : {
    id: {type: 'increments', nullable: false, primary: true},
    title: {type: 'string', maxlength: 150, nullable: false},
  },
  user_lesson : {
    user_id: {type: 'integer', references: 'user.id'},
    lesson_id: {type: 'integer', references: 'lesson.id'}
  },
  lesson_tag : {
    lesson_id: {type: 'integer', references: 'lesson.id'},
    tag_id: {type: 'integer', references: 'tag.id'}
  }
};

module.exports = Schema;