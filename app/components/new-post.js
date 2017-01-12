import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
