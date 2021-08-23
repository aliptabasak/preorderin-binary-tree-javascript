class Node{
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   };
};
var root = null;
function printWithoutRecursionPreorder(node){
    const result = [];
    const stack = [node];
    
    while (stack.length > 0)
    {
        const cur = stack.pop();
        
        if (cur === null)
        {
            continue;
        }
        
        result.push(cur.val);
        
        stack.push(cur.right);
        stack.push(cur.left);
    }
    
    return result

}

function printWithRecursionPreorder(node) {
        if (node == null)
            return;
 
        
        document.write(node.data + " ");
 
        
        printPreorder(node.left);
 
        
        printPreorder(node.right);
        
    }
    root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        printWithRecursionPreorder(root);
        printWithoutRecursionPreorder(root);
