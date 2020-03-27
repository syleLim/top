function solution(heights)
{
  return height.map((e, i) => {
    while (i--)
    {
      if (heights[i] > e)
        return (i + 1);
    }
    return (0);
  })
}