// Your code here
// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
    // Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
    get countSides() {
      return this.sides.length;
    }
    // Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
// Define a Triangle class that inherits from Polygon. 
// It will automatically have access to count and perimeter inherited from Polygon.
  class Triangle extends Polygon {
    // Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      }
      return false;
    }
  }
  
// Define a Square class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
  class Square extends Polygon {
    // Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      }
      return false;
    }
    // Use the get keyword to make a getter method area that calculates the area of the square.
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
      return 0;
    }
  }
