{-# LANGUAGE ScopedTypeVariables #-}

module FourSum where

import qualified Data.Vector as V
import Control.Exception
import Debug.Trace
import Data.List


range a b = [a..b]

fourSum :: V.Vector Int -> Int -> [[Int]]
fourSum vec target
    | V.null vec = []
    | otherwise =  concatMap threeSum (dedup [0..n-1])
    where n = V.length vec
          ref = (V.!) (V.fromList $ sort $ V.toList vec)
          dedup [] = []
          dedup (i:[]) = [i]
          dedup (i1:i2:is)
            | ref i1 == ref i2 = i1:(dedup is)
            | otherwise = i1:dedup (i2:is)
          -- three sum accumulated between (i..n)
          threeSum i = map (ref i:) $ concatMap (twoSum (target - ref i)) (dedup [i+1..n-1])
          -- two sum accumulated between (i..n)
          twoSum target' i = map (ref i:) $ twoSumRec (target' - ref i) (i+1) (n-1)
          twoSumRec target'' p r
            | p >= r = []
            | sumv < target'' = twoSumRec target'' (p+1) r
            | sumv > target'' = twoSumRec target'' p (r-1)
            | sumv == target'' = [ref p, ref r]:twoSumRec target'' (p+1) (r-1)
            where sumv = ref p + ref r

checkEqual lst1 lst2 = assert (sort lst1 == sort lst2) $ print "."

tests = do
    print $ fourSum (V.fromList [1, 0, -1, 0, -2, 2]) 0
    checkEqual (fourSum (V.fromList [-5,-4,-3,-2,-1,0,0,1,2,3,4,5]) 0) [[-5,-4,4,5],[-5,-3,3,5],[-5,-2,2,5],[-5,-2,3,4],[-5,-1,1,5],[-5,-1,2,4],[-5,0,0,5],[-5,0,1,4],[-5,0,2,3],[-4,-3,2,5],[-4,-3,3,4],[-4,-2,1,5],[-4,-2,2,4],[-4,-1,0,5],[-4,-1,1,4],[-4,-1,2,3],[-4,0,0,4],[-4,0,1,3],[-3,-2,0,5],[-3,-2,1,4],[-3,-2,2,3],[-3,-1,0,4],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    checkEqual (fourSum (V.fromList [-3,-2,-1,0,0,1,2,3]) 0) [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]