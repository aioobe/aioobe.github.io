val rnd = new util.Random

for (_ <- 1 to 1000) {
    printf("%d %d %d%n",
           rnd.nextInt(5),
           rnd.nextInt(5),
           rnd.nextInt(100))
}
