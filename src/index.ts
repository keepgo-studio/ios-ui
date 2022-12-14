// @ts-check
import { PickerComponent } from "./picker/index";

/**
 * @method config
 */
export class Picker {
  /**
   * @param {string} tagName
   * @param {{flag: boolean}} option
   * @description The picker will be created by using {@link https://developer.mozilla.org/en-US/docs/Web/Web_Components Web Components} tech.
   *
   *  By default, the tag will be defined special with tag name; "ios-ui-{@link tagName}"
   *  if you like to only with your tag name, turn off the flag in {@link option}
   */
  static config(tagName: string, option: { flag: boolean } = { flag: true }) {
    customElements.define(
      (option.flag ? "ios-ui-" : "") + tagName,
      PickerComponent
    );
  }
}
