module RemoveNthNodeFromEndofList where

import Prelude ((==), print, ($), (-), (+), (++), show, Int, return)
import qualified Data.Vector as V
import Control.Exception
import Debug.Trace
import Data.List hiding (tail)
import Data.Default
import Data.List.Mutable hiding (length)
import Control.Monad.ST
import Data.Maybe

test f a b = assert (f a == b) $ print $ (show a) ++ "<>" ++ b

-- one pass since length lst is O(1) for Haskell
removeNthFromEnd :: [a] -> Int -> [a]
removeNthFromEnd lst n = removeNth lst ((length lst)-n+1)

removeNth [] n = []
removeNth (x:xs) 1 = xs
removeNth (x:xs) k = x:removeNth xs (k-1)


-- Using ST Monad.
-- This is similar to the imperative approach. In
-- this method, we use a forward pointer and a current
-- pointer. The forward pointer is (k+1) steps away
-- from the current pointer. When we move the forward
-- pointer to the tail of the list, we know that the current
-- pointer points to the previous node of the node to delete.

-- walk two nodes until the front node reaches the tail of the list
walk2 :: Maybe (ListNode s a) -> Maybe (ListNode s a) -> ST s (Maybe (ListNode s a))
walk2 cur Nothing = return cur
walk2 cur front = do
    cur_next <- tail cur
    front_next <- tail front
    walk2 cur_next front_next

-- Note we need to return a ST s (Maybe (List s a)) instead of ST s ().
-- If we remove the head of the list, then we can't get the final result
-- by reading the old head
removeNthFromEnd1 :: Maybe (ListNode s Int) -> Int -> ST s (Maybe (ListNode s Int))
removeNthFromEnd1 p k = do
    sentinel <- singleton 0
    writeNext sentinel p
    front <- walk sentinel (k+1)
    let cur = sentinel
        in do
            prev <- walk2 cur front  -- next of prev is the node to remove
            next <- tail prev
            next_of_next <- tail next
            writeNext prev next_of_next
            tail sentinel

test1 lst k res = assert ((runST $ do
    mlst <- fromList lst
    mlst' <- removeNthFromEnd1 mlst k
    toList mlst') == res) $ print $ (show lst) ++ " " ++ (show k) ++ " <> " ++ (show res)

tests = do
    assert (removeNthFromEnd [1,2,3,4,5] 2 == [1,2,3,5]) $ print "."
    test1 [1,2,3,4,5] 2 [1,2,3,5]
    test1 [1,2,3,4,5] 1 [1,2,3,4]
    test1 [1,2,3,4,5] 5 [2,3,4,5]