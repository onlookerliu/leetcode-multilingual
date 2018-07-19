{-# LANGUAGE ScopedTypeVariables #-}

module FirstMissingPositive where

{-
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.

Show Tags
-}

import Control.Exception
import Debug.Trace
import Data.List
import qualified Data.Vector as V
import Control.Monad.Primitive
import Control.Monad.ST
import Control.Monad (forM_, when)

-- | Method 1: Purely Functional
-- This method uses O(n) space. But who cares.
firstMissingPositive :: [Int] -> Int
firstMissingPositive xs = trace (show vs_vec) $ maybe (n+1) ((+) 1) (V.findIndex (== 0) vs_vec)
    where vs_vec :: V.Vector Int = V.accum (\ _ b -> b) init_vec (zip (map (`subtract` 1) vs) vs)
          vs = filter (\v -> v >= 1 && v <= n) xs
          n = length xs
          init_vec = V.replicate n 0

-- | Method 2: the swap method


main = do
    print $ firstMissingPositive [1,2,0]

