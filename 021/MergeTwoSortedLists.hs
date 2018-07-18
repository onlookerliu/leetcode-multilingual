module MergeTwoSortedLists(tests) where

import qualified Data.Vector as V
import Control.Exception
import Debug.Trace
import Data.List

mergeTwoLists [] lst = lst
mergeTwoLists lst [] = lst
mergeTwoLists xs1'@(x1:xs1) xs2'@(x2:xs2)
    | x1 < x2 = x1:mergeTwoLists xs1 xs2'
    | otherwise = x2:mergeTwoLists xs1' xs2

tests = do
    assert (mergeTwoLists [1,2] [3,4] == [1,2,3,4]) $ print "."