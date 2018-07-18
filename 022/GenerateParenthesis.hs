{-# LANGUAGE ScopedTypeVariables #-}

module GenerateParentheses(tests) where

import qualified Data.Vector as V
import Control.Exception
import Debug.Trace
import Data.List
import ValidParentheses (isValid)



-- For each recursive call, we have two choices:
--  * put a left paren
--  * put a right paren
generateParenthesis :: Int -> [String]
generateParenthesis n = go n 0 []
    where -- go k left_acc acc:
          --    k being the number of left parens to generate,
          --    left_acc being the number of left parens left to match
          go 0 left_acc acc = [acc ++ take left_acc (repeat ')')]
          go k 0 acc = go (k-1) 1 (acc ++ "(") -- 0 left_acc left to match, so we could only put '(' here
          go k left_acc acc = (++)
              (go (k-1) (left_acc+1) (acc ++ "("))  -- put '('
              (go k (left_acc-1) (acc ++ ")"))  -- put ')'
          
test f a b = assert ((f a) == b) $ print $ (show a) ++ "<>" ++ b

tests = do
    print $ generateParenthesis 3