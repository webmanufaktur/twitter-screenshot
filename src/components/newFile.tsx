import InputText from "./form/InputText.astro";
import InputRadio from "./form/InputRadio.astro";
import InputTextarea from "./form/InputTextarea.astro";
import InputButtonReset from "./form/InputButtonReset.astro";

<Fragment>
  <div class="p-12 font-mono">
    <div class="grid grid-cols-2">
      <div>
        <InputText label="Name" name="ftname" />
        <InputText label="Handle" name="fthandle" />
        <InputTextarea
          label="Tweet"
          name="fttext"
          message="HTML allowed, no max-length."
        />
        <InputText
          label="Avatar URL"
          name="ftavatar"
          message="Add any image url you like."
        />
      </div>
      BADGE
      <div>
        <div>
          <span class="mb-1 block text-sm font-semibold">Show Badge?</span>
        </div>

        <InputRadio label="None" name="ftbasic" group="ftbadge" />
        <InputRadio label="Verification" name="ftverified" group="ftbadge" />
        <InputRadio label="Advertiser" name="ftadvertiser" group="ftbadge" />
        <InputRadio label="Official" name="ftofficial" group="ftbadge" />

        <div>
          badge<p {...{ "x-text": "badge" }}></p>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <InputText label="Replies" name="ftreplies" />
        <InputText label="Retweets" name="ftretweets" />
        <InputText label="Likes" name="ftlikes" />
        <InputText label="Stats" name="ftstats" />
      </div>
    </div>

    <InputButtonReset label="Reset to default settings" />
  </div>
</Fragment>;
