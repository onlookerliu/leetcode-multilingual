{-# LANGUAGE ScopedTypeVariables #-}

module MergeKSortedLists where

import           Control.Exception
import           Data.Function     (on)
import qualified Data.Heap         as H
import           Data.Lists
import qualified Data.Vector       as V
import           Debug.Trace

-- The recursive solution
-- Each time, we merge two lists
mergeKLists [] = []
mergeKLists lsts = head $ go lsts
    where go [] = []
          go [xs] = [xs]
          go (xs1:xs2:lsts) = go (merge xs1 xs2:go lsts)


-- The Heap Solution
newtype ListEntry a = ListEntry { _lst :: [a]}
    deriving (Show)

instance (Eq a) => Eq (ListEntry a) where
    (==) = (==) `on` (head . _lst)

instance (Ord a) => Ord (ListEntry a) where
    compare = compare `on` (head . _lst)


-- We make sure that all lists insert into heap is not empty
insertHeap :: (Ord a) => [a] -> H.Heap (ListEntry a) -> H.Heap (ListEntry a)
insertHeap xs hp = if null xs then hp else H.insert (ListEntry xs) hp

mergeKLists1 lsts = let hp = foldl (flip insertHeap) H.empty lsts
                        go hp lst
                            | H.null hp = lst
                            | otherwise = go (insertHeap (tail min_lst) rst_hp) (lst ++ [head min_lst])
                                where min_lst = _lst $ H.minimum hp
                                      rst_hp = H.deleteMin hp
                        in go hp []

test f a b = assert ((f a) == b) $ print $ (show a) ++ "<>" ++ b

tests = do
    print $ mergeKLists [[1,5,9], [2,6,10], [3,7,11], [4,8,12]]
    print $ mergeKLists1 [[1,5,9], [2,6,10], [3,7,11], [4,8,12]]
