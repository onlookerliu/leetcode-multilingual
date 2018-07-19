{-# LANGUAGE ScopedTypeVariables #-}

module RemoveDuplicatesFromSortedArray where

import qualified Data.Vector as V
import Control.Exception
import Debug.Trace
import qualified Data.Vector.Mutable as MV
import qualified Data.Vector.Mutable.Util as MVUtil
import Control.Monad.Primitive
import Control.Monad.ST
import Control.Monad (foldM)

-- | Method 1
-- fold on index of the array to get the length of the de-duplicated array
removeDuplicates :: (PrimMonad m, Eq a) => MV.MVector (PrimState m) a -> m (MV.MVector (PrimState m) a)
removeDuplicates mvec
    | MV.null mvec = return mvec
    | otherwise = foldM go 1 [1..n] >>= return . flip MV.take mvec
        where n = MV.length mvec
              go len i
                | i == n = return len
                | otherwise = do
                  a <- MV.read mvec (len-1)
                  b <- MV.read mvec i
                  if (a == b)
                  then return len
                  else do
                    MV.swap mvec len i
                    return (len+1)


test a = runST $ do
    mvec <- MVUtil.fromList a
    mvec <- removeDuplicates mvec
    MVUtil.toList mvec

tests = assert (test [1,1,2,3,4,4,5,5,6,6,7,7] == [1,2,3,4,5,6,7]) $ print "."