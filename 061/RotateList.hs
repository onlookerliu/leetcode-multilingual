{-# LANGUAGE ScopedTypeVariables #-}

module RotateList where

import qualified Data.Vector as V
import Control.Exception
import Debug.Trace
import qualified Data.List.Mutable as L
import Data.STRef
import Control.Monad.ST

-- | Method 1
rotateRight xs k
    | k >= length xs = rotateRight xs $ k `mod` (length xs)
    | otherwise = drop m xs ++ take m xs
        where m = length xs - k

-- | Method 2: using ST Monad

walkUntilTail :: Maybe (L.ListNode s a) -> Maybe (L.ListNode s a) -> ST s (Maybe (L.ListNode s a), Maybe (L.ListNode s a))
walkUntilTail p1 p2 = do
    p2_t <- L.tail p2
    case p2_t of
        Nothing -> return (p1,p2)
        otherwise -> do
            p1_t <- L.tail p1
            walkUntilTail p1_t p2_t

rotateRight1 :: Maybe (L.ListNode s a) -> Int -> ST s (Maybe (L.ListNode s a))
rotateRight1 xs k = do
    let p1 = xs
    p2 <- L.walk p1 k
    (p1, p2) <- walkUntilTail p1 p2
    L.writeNext p2 xs
    p1_t <- L.tail p1
    L.writeNext p1 L.empty
    return p1_t

evalRotateRight :: [Int] -> Int -> [Int]
evalRotateRight xs k = runST $ do
    xs <- L.fromList xs
    xs <- rotateRight1 xs k
    L.toList xs

main = do
    print $ rotateRight [1,2,3,4,5] 2
    print $ evalRotateRight [1,2,3,4,5] 2