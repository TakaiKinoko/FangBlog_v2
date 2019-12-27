---
title: "Java Big Numbers"
category: "Java"
cover: camel.png
author: Fang 
---

## Example 1
[Validate a BST](https://leetcode.com/problems/validate-binary-search-tree/)
Given a binary tree, determine if it is a valid binary search tree (BST).

Buggy code:
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
        return checkNode(root.left, Integer.MIN_VALUE, root.val) && checkNode(root.right, root.val, Integer.MAX_VALUE);
    }
    
    public boolean checkNode(TreeNode n, int floor, int ceil){
        if(n == null) 
            return true;
        if(n.val <= floor || n.val >= ceil)
            return false;
        return checkNode(n.left, floor, n.val) && checkNode(n.right, n.val, ceil);
    }
}
```

### Corner Cases
[-2147483648,null,2147483647]
[2147483647,null,2147483647]

Fix problem just by switching to a **bigger container**:
```java
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