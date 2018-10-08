function BinaryTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}

	var root = null;
	var insertNode = function(node, newNode) {
		if(newNode.key < node.key) {
			if(node.left == null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode)
			}
		} else {
			if(node.right == null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode)
			}
		}
	}
	
	this.insert=function(key){
		var newNode=new Node(key);
		if(root==null){
			root=newNode
		}else{
			insertNode(root,newNode)
		}
	};
	
	var inOrderTraversNode=function(node,callback){
		if(node!==null){
			inOrderTraversNode(node.left,callback);
			callback(node.key);
			inOrderTraversNode(node.right,callback)
		}
	}
	var preOrderTraverse=function(node,callback){
		if(node!==null){
			callback(node.key);
			preOrderTraverse(node.left,callback);
			preOrderTraverse(node.right,callback);
		}
	}
	var afterOrderTraverse=function(node,callback){
		if(node!==null){
			afterOrderTraverse(node.left,callback);
			afterOrderTraverse(node.right,callback);
			callback(node.key);
		}
	}
	
	var minFunc=function(node){
		if(node){
			while(node&&node.left!==null){
				node=node.left;
			}
			return node.key
		}
		return null
	}
	var maxFunc=function(node){
		if(node){
			while(node&&node.right!==null){
				node=node.right
			}
			return node.key;
		}
		return null
	}
	var searchValue=function(node,value){
		if(node==null){
			return false;
		}
		if(value<node.key){
			return searchValue(node.left,value);
		}else if(value>node.key){
			return searchValue(node.right.value);
		}else{
			return true;
		}	
	}
	var findMinNode=function(node){
		if(node){
			while(node&&node.left!==null){
				return node.left;
			}
			return node
		}
		return null
	}
	
	var removeNode=function(node,value){
		if(node==null){
			return null
		}
		if(value<node.key){
			node.left=removeNode(node.left,value);
			return node;
		}else if(value>node.key){
			node.right=removeNode(node.right,value);
			return node;
		}else{
			if(node.left===null&&node.right==null){
				node=null;
				return node;
			}
			if(node.left==null){
				node=node.right;
				return node;
			}else if(node.right==null){
				node.node.left;
				return node;
			}
			var _temp=findMinNode(node.right);
			node.key=_temp.key;
			node.right=removeNode(node.right,_temp.key);
			return node;	
		}
	}
	
	this.inOrderTraverse=function(callback){
		inOrderTraversNode(root,callback);
	}
	this.preOrderTraverse=function(callback){
		preOrderTraverse(root,callback)
	}
	this.afterOrderTraverse=function(callback){
		afterOrderTraverse(root,callback)
	}
	this.min=function(){
		return minFunc(root);
	}
	this.max=function(){
		return maxFunc(root);
	}
	this.searchValue=function(value){
		return searchValue(root,value)
	}
	this.remove=function(value){
		return root=removeNode(root,value)
	}
	
}



var nodes=[12,10,20,8,6,7,14,12,2,16]

var binaryTree=new BinaryTree();
nodes.forEach(function(item){
	binaryTree.insert(item);
})
binaryTree.inOrderTraverse(function(key){
	console.log(key)
})

binaryTree.preOrderTraverse(function(key){
	console.log(key)
})

binaryTree.afterOrderTraverse(function(key){
	console.log(key)
})

console.log('最小值为：'+binaryTree.min());
console.log('最大值为：'+binaryTree.max());
console.log(binaryTree.searchValue(6)?'Yes':'No');
console.log(binaryTree.remove(11))