#include<iostream>
#include<vector>
using namespace std;


/*  Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number 
    of 1's in their binary representation and return them as an array.
*/

class Solution {
public:
    int countOnes(int n) {
    int count=0;
    while(n) {
        //right shift n untill 0
        if(n&1) count++;            
        n = n>>1;
    }
    return count;
}

vector<int> countBits(int num) {
    vector<int> res;
    for(int i=0; i<=num; i++) {
        res.push_back(countOnes(i));
    }
    return res;
}
};

int main() {
    Solution s;
    vector<int> res = s.countBits(5);
    for(int r:res) {
        cout<<r<<" ";
    }
}