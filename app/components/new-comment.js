import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow(){
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
