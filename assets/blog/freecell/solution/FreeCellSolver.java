
public class FreeCellSolver {

    public static int computeMax(int emptyCells, int emptyCols) {
        int max = emptyCells + 1;
        while (--emptyCols >= 0)
            max += computeMax(emptyCells, emptyCols);
        return max;
    }
    
    public static void main(String[] args) {
        
        java.util.Scanner s = new java.util.Scanner(System.in);

        while (s.hasNextInt()) {
            boolean solveable = computeMax(s.nextInt(), s.nextInt()) >= s.nextInt();
            System.out.println(solveable ? "yes" : "no");
        }
    }
}
