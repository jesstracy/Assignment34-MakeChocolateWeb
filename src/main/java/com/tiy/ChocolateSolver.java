package com.tiy;

/**
 * Created by jessicatracy on 9/22/16.
 */
public class ChocolateSolver {
//    int numBig;
//    int numSmall;
//    int goal;

//    int[] solution = new int[2];
//    boolean hasSolution;


//    public ChocolateSolver() {
//    }
//
//    public ChocolateSolver(int numBig, int numSmall, int goal) {
//        this.numBig = numBig;
//        this.numSmall = numSmall;
//        this.goal = goal;
//    }
//
//    public int getNumBig() {
//        return numBig;
//    }
//
//    public void setNumBig(int numBig) {
//        this.numBig = numBig;
//    }
//
//    public int getNumSmall() {
//        return numSmall;
//    }
//
//    public void setNumSmall(int numSmall) {
//        this.numSmall = numSmall;
//    }
//
//    public int getGoal() {
//        return goal;
//    }
//
//    public void setGoal(int goal) {
//        this.goal = goal;
//    }
//
//    public int[] getSolution() {
//        return solution;
//    }
//
//    public void setSolution(int[] solution) {
//        this.solution = solution;
//    }
//
//    public boolean isHasSolution() {
//        return hasSolution;
//    }
//
//    public void setHasSolution(boolean hasSolution) {
//        this.hasSolution = hasSolution;
//    }

    public ChocolateSolution makeChocolate(int big, int small, int goal) {

        ChocolateSolution solution = new ChocolateSolution();
        int maxGoal = small + (big * 5);

        if (goal > maxGoal) {
            System.out.println("Not enough chocolate");
            solution.setNoSolution();
            return solution;
        }

        int smallsRequired = 0;
        int bigsRequired = 0;

        if (big == 0) {
            smallsRequired = goal;
        } else {
            smallsRequired = goal % 5;
            bigsRequired = goal / 5;
        }

        if (smallsRequired > small) {
            System.out.println("Not enough smalls");
            solution.setNoSolution();
            return solution;
        }

        if (bigsRequired > big) {
            smallsRequired += 5 * (bigsRequired - big);
            bigsRequired = big;
            if (smallsRequired > small) {
                System.out.println("Not enough bigs");
                solution.setNoSolution();
                return solution;
            }
        }

        solution.setSolution(smallsRequired, bigsRequired);

        return solution;
    }
}
