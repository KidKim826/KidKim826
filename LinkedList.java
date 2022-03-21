package 구현;

public class LinkedList {
	
	private Node head; //누가 첫번째 노드 인가
	private Node tail; //누가 마지막 노드 인가
	private int size = 0; //몇개의 엘리먼트가 리스트 안에 포함되어 있는가
	
	private class Node {
		private Object data; // 각각의 노드가 담을 애들
		private Node next; // 누가 다음 노드인가
		
		//생성자 만들어주기
		public Node(Object input) { // 노드가 생성되었을 때 갖는 값은 input으로 받고
			this.data = input;
			this.next = null; // 아직은 알 수 없어
		}
		
		public String toString() {
			return String.valueOf(this.data); // 데이터 값 출력 위함
		}
		
	}
	
	public void addFirst(Object input) {
		Node newNode = new Node(input); // 데이터 값은 새로 입력된 input // next는 null.
		newNode.next = head;
		head = newNode;
		size++; // 사이즈는 하나 키워주고
		if(head.next == null) { // 만약 다음 노드가 없어
			tail = head; //그렇다면 헤드가 곧 테일이다.
		}
	}
	
	public void addLast(Object input) {
		Node newNode = new Node(input);
		if(size==0) { // 데이터가 없으면 그냥 넣으면 됨
			addFirst(input);
		} else { // 기존에 tail이 가르키는 노드가 새로운 노드로 연결이 되면 된다.
			tail.next = newNode; //새로운 노드로 연결을 시키고
			tail = newNode;//그러면 이제 테일은 새로운 노드
			size++;//엘리먼트가 추가 되었기 떄매 사이즈 하나 올려주고
		}
		
	}
	
	public Node node(int index) {
		Node x = head;
		for(int i = 0; i < index; i++) {
			x = x.next;
		}
		return x;
	}
	
	public void add(int index, Object input) {
		if(index == 0) {
			addFirst(input);
		}else {
			Node tmp = node(index-1);
			Node tmp2 = tmp.next;
			Node newNode = new Node(input);
			tmp.next = newNode;
			newNode.next = tmp2;
			size++;
			if(newNode.next == null) {
				tail = newNode;
			}
			
		}
	}
	
	public String toString() {
		if(head == null) {
			return "[]";
		}
		Node tmp = head;
		String str = "[";
		while(tmp.next != null) {
			str += tmp.data + ", ";
			tmp = tmp.next;
		}
		str += tmp.data;
		return str+"]";
	}
	//데이터 삭제부터 removeFirst
	
}
