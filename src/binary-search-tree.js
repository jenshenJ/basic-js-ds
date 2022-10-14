const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root_node = null;
  root() {
    return this.root_node;
  }

  add(data) {
    this.root_node = AddData(this.root_node, data);

    function AddData(node, data){
        if(node === null){
            node = new Node(data);
            return node;
        }

        if(node.data > data){
          node.left = AddData(node.left, data);
          return node;
        }
        else {
          node.right = AddData(node.right, data);
          return node;
        }
    }
  }

  has(data) {
    return HasData(this.root_node, data);

    function HasData(node, data){
      if(node == null) return false;

      if(node.data === data) return true;

      if(node.data < data) return HasData(node.right, data);
      return HasData(node.left, data);
    }
  }

  find(data) {
    return FindData(this.root_node, data);

    function FindData(node, data){
      if(node == null) return null;

      if(node.data == data) return node;

      if(node.data > data) return FindData(node.left, data);
      return FindData(node.right, data);
    }
  }

  remove(data) {
    this.root_node = removeNode(this.root_node, data);

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if(!node.left && !node.right){
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        
        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    return FindMin(this.root_node);
    function FindMin(node){

      if(node == null) return null;

      if(node.left == null) return node.data;

      return FindMin(node.left);
    }
  }
  

  max() {
    return FindMax(this.root_node);
    
    function FindMax(node){

      if(node == null) return null;

      if(node.right == null) return node.data;

      return FindMax(node.right);
    }
  }
}



var tree = new BinarySearchTree();



module.exports = {
  BinarySearchTree
};