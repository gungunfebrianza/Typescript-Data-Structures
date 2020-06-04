type NullableNumber = number | null;

class node {
  private _root: null | node;
  private value: NullableNumber;
  private left: NullableNumber;
  private right: NullableNumber;

  constructor(
    val: NullableNumber,
    left: NullableNumber,
    right: NullableNumber,
  ) {
    this.value = val;
    this.right = right;
    this.left = left;
    this._root = null;
  }
  public insert(number: number): void {
    if (!this._root) {
      this._root = new node(12, null, null);
    } else {
    }
  }
}
