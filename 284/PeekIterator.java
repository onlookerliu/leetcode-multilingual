import java.util.Iterator;

/**
 * PeekIterator
 */
public class PeekIterator {

    // Java Iterator interface reference:
    // https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
    class PeekingIterator implements Iterator<Integer> {
        Iterator<Integer> iterator;
        Integer next;

        public PeekingIterator(Iterator<Integer> iterator) {
            // initialize any member here.
            this.iterator = iterator;
        }

        // Returns the next element in the iteration without advancing the iterator.
        public Integer peek() {
            if (next == null)
                next = iterator.next();
            return next;
        }

        // hasNext() and next() should behave the same as in the Iterator interface.
        // Override them if needed.
        @Override
        public Integer next() {
            Integer res;
            if (next == null)
                res = iterator.next();
            else {
                res = next;
                next = null;
            }
            return res;
        }

        @Override
        public boolean hasNext() {
            return next != null || iterator.hasNext();
        }
    }
}