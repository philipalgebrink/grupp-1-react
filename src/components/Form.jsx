export default function Form() {
    return(
    <form>
        <label>CARD NUMBER</label>
        <input type="text" />
        <label>CARDHOLDER NAME</label>
        <input type="text" />
        <section>
            <label>VALID THRU</label>
            <input type="text" />
            <label>CCV</label>
            <input type="text" />
        </section>
        <label>VENDOR</label>
        <select name="#" id="#">
            <option value="#">1</option>
            <option value="#">2</option>
            <option value="#">3</option>
            <option value="#">4</option>
        </select>
    </form>
    );
}