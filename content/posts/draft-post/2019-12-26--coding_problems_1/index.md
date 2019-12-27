---
title: "My LeetCode Journey -- 1. BST"
category: "LeetCode"
cover: eistein2.jpeg
author: Fang 
---

## BST Review


## Unpacking a BST

### Recursive

Be careful of: 
Boundary check -- e.g. null node 

### Iterative

## Questions

### 98. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

#### Recursive Solution

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        if(root == null)
            return true;
        return checkNode(root.left, Long.MIN_VALUE, root.val) && checkNode(root.right, root.val, Long.MAX_VALUE);
    }
    
    public boolean checkNode(TreeNode n, long floor, long ceil){
        if(n == null) 
            return true;
        if(n.val <= floor || n.val >= ceil)
            return false;
        return checkNode(n.left, floor, n.val) && checkNode(n.right, n.val, ceil);
    }
}
```

#### Iterative Solution

```java
class Solution {
  LinkedList<TreeNode> stack = new LinkedList();
  LinkedList<Integer> uppers = new LinkedList(),
          lowers = new LinkedList();

  public void update(TreeNode root, Integer lower, Integer upper) {
    stack.add(root);
    lowers.add(lower);
    uppers.add(upper);
  }

  public boolean isValidBST(TreeNode root) {
    Integer lower = null, upper = null, val;
    update(root, lower, upper);

    while (!stack.isEmpty()) {
      root = stack.poll();
      lower = lowers.poll();
      upper = uppers.poll();

      if (root == null) continue;
      val = root.val;
      if (lower != null && val <= lower) return false;
      if (upper != null && val >= upper) return false;
      update(root.right, val, upper);
      update(root.left, lower, val);
    }
    return true;
  }
}
```

#### In-order Traversal & Stack

```java
class Solution {
  public boolean isValidBST(TreeNode root) {
    Stack<TreeNode> stack = new Stack();
    double inorder = - Double.MAX_VALUE;

    while (!stack.isEmpty() || root != null) {
      while (root != null) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      // If next element in inorder traversal
      // is smaller than the previous one
      // that's not BST.
      if (root.val <= inorder) return false;
      inorder = root.val;
      root = root.right;
    }
    return true;
  }
}
```

### 530. [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

In order traversal, then iterate the list obtained from the traversal while computing pairwise difference.
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    
    public int getMinimumDifference(TreeNode root) {
        List<Integer> vals = new ArrayList<>();
        traverse(root, vals);
        int minDiff = Integer.MAX_VALUE;
        
        for(int i = 1; i < vals.size(); i++){
            int tmp = Math.abs(vals.get(i) - vals.get(i-1));
            minDiff = minDiff < tmp? minDiff: tmp;
        }
        return minDiff;
    }
    
    public void traverse(TreeNode n, List<Integer> vals){
        if(n == null) return;
        traverse(n.left, vals);
        vals.add(n.val);
        traverse(n.right, vals);
    }
    
}
```


### 173. [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

* `next()` and `hasNext()` should run in average `O(1)` time and uses `O(h)` memory, where h is the height of the tree.
* You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.