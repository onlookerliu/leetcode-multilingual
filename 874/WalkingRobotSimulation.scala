import scala.collection.mutable
import scala.util.control.Breaks.{breakable, break}

object WalkingRobotSimulation {
  def robotSim(commands: Array[Int], obstacles: Array[Array[Int]]): Int = {
    var obstacleMap = mutable.HashMap.empty[Int, List[Int]]
    for (obstacle <- obstacles) {
      var child = obstacleMap.getOrElseUpdate(obstacle(0), List.empty[Int])
      child = child :+ obstacle(1)
      obstacleMap(obstacle(0)) = child
    }

    val addon = Array(Array(0, 1), Array(1, 0), Array(0, -1), Array(-1, 0))
    var (x, y) = (0, 0)
    var direction = 0
    var maxDist = 0
    for (command <- commands) {
      if (command == -2)
        direction = (direction + 3) % 4
      else if (command == -1)
        direction = (direction + 1) % 4
      else {
        val deltaX = addon(direction)(0)
        val deltaY = addon(direction)(1)
        breakable {
          for (_ <- 1 to command) {
            x += deltaX
            y += deltaY
            if (obstacleMap.contains(x) && obstacleMap(x).contains(y)) {
              x -= deltaX
              y -= deltaY
              break
            }
//            print(s"$x, $y\n")
            maxDist = maxDist max (x * x + y * y)
          }
        }
      }
    }

    maxDist = maxDist max (x*x + y*y)
    maxDist
  }

  def main(args: Array[String]): Unit = {
    val commands = Array(4, -1, 4, -2, 4)
    val obstacles = Array(Array(2, 4))
    println(robotSim(commands, obstacles))
  }

}